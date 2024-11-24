import { Component } from "@angular/core";
import { ButtonComponent } from "../../components/button/button.component";
import { IconsModule } from "../../icons/icons.module";
import { KeysComponent } from "./tabs/keys/keys.component";
import { AccountComponent } from "./tabs/account/account.component";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-settings",
  host: { class: "flex-1" },
  standalone: true,
  imports: [
    ButtonComponent,
    IconsModule,
    CommonModule,
    AccountComponent,
    KeysComponent,
  ],
  templateUrl: "./settings.component.html",
})
export class SettingsComponent {
  public activeTab: string = "api-keys";

  public setActiveTab(activeTab: string) {
    this.activeTab = activeTab;
  }
}
