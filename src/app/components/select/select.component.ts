import { Component, Input } from "@angular/core";
import { IconsModule } from "../../icons/icons.module";

@Component({
  selector: "app-select",
  standalone: true,
  imports: [IconsModule],
  templateUrl: "./select.component.html",
})
export class SelectComponent {
  @Input() innerLabel: string = "";
  @Input() placeholder: string = "";
  @Input() icon: string = "";
  @Input() type: string = "text";
}
