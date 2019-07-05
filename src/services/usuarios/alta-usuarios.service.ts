import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AltaUsuariosService {

  url = 'http://localhost:8000/usuarios';
  constructor(public http: HttpClient) { }


  createUser(user) {
    return this.http.post(this.url + '/create', user, {responseType: 'json'});
  }

  getUser(id) {
    return this.http.get(this.url + '?id=' + id, {responseType: 'json'});
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
