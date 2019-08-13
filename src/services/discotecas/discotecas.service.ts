import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { GeneralService } from '../general';


@Injectable({
  providedIn: 'root'
})
export class DiscotecasService {

url = 'http://localhost:8000/discotecas';
constructor(public http: HttpClient, private generalService: GeneralService) { }

getDiscotecas() {
  return this.http.get(this.url);
}

}
