import { Component, OnInit } from "@angular/core";
import { ButtonComponent } from "../../../../components/button/button.component";
import { IconsModule } from "../../../../icons/icons.module";
import { InputComponent } from "../../../../components/input/input.component";
import { SettingsService } from "../../settings.service";
import { ToastrService } from "ngx-toastr";
import { IKey } from "../../interfaces/key.interface";
import { take } from "rxjs";

@Component({
  selector: "app-keys",
  standalone: true,
  imports: [ButtonComponent, InputComponent, IconsModule],
  templateUrl: "./keys.component.html",
})
export class KeysComponent implements OnInit {
  public keys: IKey[] = [];
  constructor(
    private readonly settingsService: SettingsService,
    private readonly toastr: ToastrService
  ) {}

  ngOnInit() {
    this.getKeys();
  }

  getKeys() {
    this.settingsService
      .getKeys()
      .pipe(take(1))
      .subscribe({
        next: (res) => (this.keys = res),
        error: (err) => this.toastr.error(err, "Erro!"),
      });
  }
}
