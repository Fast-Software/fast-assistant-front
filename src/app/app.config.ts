import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core";
import { provideAnimations } from "@angular/platform-browser/animations";
import { provideRouter } from "@angular/router";
import { provideToastr } from "ngx-toastr";
import { routes } from "./app.routes";
import { errorInterceptor } from "./interceptors/error.interceptor";
import { authInterceptor } from "./interceptors/auth.interceptor";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([errorInterceptor, authInterceptor])),
    provideAnimations(),
    provideToastr({
      timeOut: 5000,
      positionClass: "toast-top-right",
      preventDuplicates: true,
      progressBar: true,
      closeButton: true,
    }),
  ],
};
