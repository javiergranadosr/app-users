import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService {
  public handle(error: any): void {
    // Log the error, send it to a remote service, or perform other actions
    console.error('Ha ocurrido un error:', error);
    // Optionally, re-throw the error or return a default value
    throwError(() => 'Ha ocurrido un errror');
  }
}
