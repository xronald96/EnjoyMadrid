import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class RrppsService {

  url = 'http://localhost:8000/rrpps';
  constructor(public http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  importRRPPs(files: object) {
    return this.http.post(this.url + '/import-rrpp', files, {responseType: 'text'});
  }

  newRRPP(rrpp: object) {
    return this.http.post(this.url + '/new-rrpp', rrpp, {responseType: 'text'});
  }

  getBosses() {
    return this.http.get(this.url + '/select-boss', {responseType: 'json'});
  }

  getAllRRPPs(toSearch: string) { // Array.from
    const userDate = JSON.parse(localStorage.getItem('EnjoyMadrid_user'));
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: userDate.token
      }),
    };
    return this.http.get(this.url + '/getAll?toSearch=' + toSearch || 'null', httpOptions).toPromise();
  }

  public handleError(error: HttpErrorResponse) {
    console.log('Entro por auwi', error);
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else if (error.error.message === 'Token is not valid') {
      this.router.navigate(['/login']);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
}
