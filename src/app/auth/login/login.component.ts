import { Component } from "@angular/core";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { take } from "rxjs";
import { ButtonComponent } from "../../components/button/button.component";
import { InputComponent } from "../../components/input/input.component";
import { IconsModule } from "../../icons/icons.module";
import { AuthService } from "../auth.service";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [ReactiveFormsModule, IconsModule, InputComponent, ButtonComponent],
  providers: [AuthService],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.scss",
})
export class LoginComponent {
  public form: FormGroup;

  constructor(
    private readonly authService: AuthService,
    private readonly toastr: ToastrService,
    private readonly router: Router
  ) {
    this.form = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required]),
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.authService
        .login(this.form.value)
        .pipe(take(1))
        .subscribe({
          next: (res) => {
            localStorage.setItem("token", res.access_token);
            this.toastr.success("Autenticado com sucesso!", "Sucesso!");
            this.router.navigate(["/", "assistentes"]);
          },
          error: (err) => this.toastr.error(err, "Erro!"),
        });
    }
  }
}
