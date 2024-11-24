import {
  HttpErrorResponse,
  HttpHandlerFn,
  HttpRequest,
} from "@angular/common/http";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";

export function errorInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
) {
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let errorMessage = "";
      if (error.error instanceof ErrorEvent) {
        errorMessage = `Error: ${error.error.message}`;
      } else {
        errorMessage = error.error.detail;
      }
      return throwError(errorMessage);
    })
  );
}
