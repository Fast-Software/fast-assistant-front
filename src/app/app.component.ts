import { Component } from "@angular/core";
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterOutlet,
} from "@angular/router";
import { filter, map, mergeMap } from "rxjs";
import { SideBarComponent } from "./components/side-bar/side-bar.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, SideBarComponent],
  templateUrl: "./app.component.html",
})
export class AppComponent {
  public showSidebar = false;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.route),
        map((route) => {
          while (route.firstChild) route = route.firstChild;
          return route;
        }),
        filter((route) => route.outlet === "primary"),
        mergeMap((route) => route.data)
      )
      .subscribe((data) => {
        this.showSidebar = !!data["showSidebar"];
      });
  }
}
