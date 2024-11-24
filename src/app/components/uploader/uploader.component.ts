import { Component, EventEmitter, Input, Output } from "@angular/core";
import { IconsModule } from "../../icons/icons.module";

@Component({
  selector: "app-uploader",
  standalone: true,
  imports: [IconsModule],
  templateUrl: "./uploader.component.html",
})
export class UploaderComponent {
  @Output() onSelectFile = new EventEmitter();
  upload?: File;

  changeFile(event: any) {
    this.upload = event.target.files[0];
    this.onSelectFile.emit(this.upload);
  }
}
