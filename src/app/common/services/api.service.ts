import { Injectable } from '@angular/core';
import { Observable, ObservableInput, throwError, of } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ApiService {
  constructor(private readonly httpClient: HttpClient) { }

  public getArray(endpoint: string): Observable<any> {
    return this.httpClient
      .get(endpoint)
      .pipe(catchError((error: HttpErrorResponse) => this.handleError(error))) as Observable<any>;
  }

  public getSingle(endpoint: string): Observable<any> {
    return this.httpClient
      .get(endpoint)
      .pipe(catchError((error: HttpErrorResponse) => this.handleError(error))) as Observable<any>;
  }

  private handleError(error: HttpErrorResponse): Observable<string> {
    console.log('HTTP error', error.name);
    return of(error.message);
  }
}
