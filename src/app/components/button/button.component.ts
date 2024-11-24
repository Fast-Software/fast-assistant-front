import { Component, Input } from "@angular/core";

@Component({
  selector: "app-button",
  standalone: true,
  imports: [],
  templateUrl: "./button.component.html",
  styleUrl: "./button.component.scss",
})
export class ButtonComponent {
  @Input() disabled: boolean = false;
  @Input() type: "contained" | "outlined" | "text" | "icon" = "contained";

  public readonly containerClasses = {
    contained:
      "group w-full rounded-full px-4 py-3 border border-primary bg-primary disabled:cursor-not-allowed disabled:brightness-75",
    outlined:
      "group w-full rounded-full px-4 py-3 border border-neutral bg-light transition-all hover:border-primary disabled:cursor-not-allowed disabled:brightness-75",
    text: "group w-full px-4 py-3 disabled:cursor-not-allowed disabled:brightness-75",
    icon: "group w-full rounded-full p-2.5 border border-primary bg-primary disabled:cursor-not-allowed disabled:brightness-75",
  };

  public readonly contentsClasses = {
    contained: "text-light flex items-center justify-center gap-2",
    outlined:
      "text-dark-500 flex items-center justify-center gap-2 transition-all group-hover:text-primary",
    text: "text-dark-500 flex items-center justify-center gap-2 transition-all group-hover:text-primary",
    icon: "text-light flex items-center justify-center gap-2",
  };
}
