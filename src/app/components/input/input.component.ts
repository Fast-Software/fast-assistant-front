import { Component, Input, forwardRef } from "@angular/core";
import { IconsModule } from "../../icons/icons.module";
import {
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  ValidationErrors,
} from "@angular/forms";

@Component({
  selector: "app-input",
  standalone: true,
  imports: [ReactiveFormsModule, IconsModule],
  templateUrl: "./input.component.html",
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent {
  @Input() innerLabel: string = "";
  @Input() placeholder: string = "";
  @Input() icon: string = "";
  @Input() type: string = "text";
  @Input() value: string = "";
  @Input() name: string = "";
  @Input() disabled: boolean = false;
  @Input() readonly: boolean = false;
  @Input() required: boolean = false;

  @Input() set errors(value: ValidationErrors | null | undefined) {
    this.errorMessage = "";
    if (value) {
      this.errorMessage = this.getErrorMessage(value);
    }
  }

  errorMessage: string = "";

  getErrorMessage(errors: ValidationErrors): string {
    const errorMessages: Record<keyof ValidationErrors, string> = {
      required: "Campo obrigatório",
      email: "E-mail inválido",
    };
    const messages = Object.keys(errors).map((key) => errorMessages[key]);
    return messages.join(", ");
  }

  onChange: (value: any) => void = () => {};
  onTouched: () => void = () => {};

  onInputChange(event: Event): void {
    const inputValue = (event.target as HTMLInputElement).value;
    this.value = inputValue;
    this.onChange(inputValue);
  }

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
