import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RrppsService {

  url = 'http://localhost:8000/rrpps';

  constructor(public http: HttpClient) { }

  importRRPPs(files: object) {
    return this.http.post(this.url + '/import-rrpp', files, {responseType: 'text'});
  }

  newRRPP(rrpp: object) {
    return this.http.post(this.url + '/new-rrpp', rrpp, {responseType: 'text'});
  }

  getBosses() {
    return this.http.get(this.url + '/select-boss', {responseType: 'json'});
  }

  public handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
}
