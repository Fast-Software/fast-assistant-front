import { Component } from "@angular/core";
import { ButtonComponent } from "../../../../components/button/button.component";
import { InputComponent } from "../../../../components/input/input.component";
import { SideBarComponent } from "../../../../components/side-bar/side-bar.component";
import { TextareaComponent } from "../../../../components/textarea/textarea.component";
import { IconsModule } from "../../../../icons/icons.module";
import { UploaderComponent } from "../../../../components/uploader/uploader.component";
import { SelectComponent } from "../../../../components/select/select.component";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-assistants",
  host: { class: "flex-1" },
  standalone: true,
  imports: [
    IconsModule,
    SideBarComponent,
    InputComponent,
    SelectComponent,
    ButtonComponent,
    TextareaComponent,
    UploaderComponent,
    RouterLink,
  ],
  templateUrl: "./assistants.component.html",
})
export class AssistantsFormComponent {
  public files: any[] = [];

  public value =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra ultricies odio sit amet interdum. Etiam at nulla quis leo pharetra bibendum. Nam efficitur mauris at felis convallis vestibulum.";

  public onSelectFile(file: any) {
    this.files.push(file);
  }
}
