import { Component, OnInit } from "@angular/core";
import { RouterLink } from "@angular/router";
import { ButtonComponent } from "../../../../components/button/button.component";
import { CheckboxComponent } from "../../../../components/checkbox/checkbox.component";
import { InputComponent } from "../../../../components/input/input.component";
import { IconsModule } from "../../../../icons/icons.module";
import { AssistantsService } from "../../assistants.service";
import { ToastrService } from "ngx-toastr";
import { IAssistant } from "../../interfaces/assistant.interface";
import { take } from "rxjs";

@Component({
  selector: "app-assistants",
  host: { class: "flex-1" },
  standalone: true,
  imports: [
    IconsModule,
    InputComponent,
    ButtonComponent,
    CheckboxComponent,
    RouterLink,
  ],
  templateUrl: "./assistants.component.html",
})
export class AssistantsListComponent implements OnInit {
  public assistants: IAssistant[] = [];

  constructor(
    private readonly assistantsService: AssistantsService,
    private readonly toastr: ToastrService
  ) {}

  ngOnInit() {
    this.getAssistants();
  }

  private getAssistants(): void {
    this.assistantsService
      .getAssistants()
      .pipe(take(1))
      .subscribe({
        next: (res) => (this.assistants = res),
        error: (err) => this.toastr.error(err, "Erro!"),
      });
  }

  public onEdit(assistantId: string): void {
    console.log("Edit assistant with id: ", assistantId);
  }

  public onDelete(assistantId: string): void {
    console.log("Delete assistant with id: ", assistantId);
  }
}
