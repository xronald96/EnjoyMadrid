import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
@Injectable({
    providedIn: 'root'
  })
export class GeneralService {

    constructor(private router: Router) { }

      public  generateHeader() {
        const userData = JSON.parse(localStorage.getItem('EnjoyMadrid_user')) ? JSON.parse(localStorage.getItem('EnjoyMadrid_user')) : null;
        const token = userData && userData.token ?  JSON.parse(localStorage.getItem('EnjoyMadrid_user')).token : '';
        const headers = new HttpHeaders({Authorization: token, 'Content-Type': 'application/json'});
        return {headers};
    }

    public  handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
          console.error('An error occurred:', error.error.message);
        } else if (error.error.message && !error.error.succes) { // Si tenemos mensaje de error y succes false volvemos a loggearnos
          console.error('An error occurred:', error.error.message);
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
