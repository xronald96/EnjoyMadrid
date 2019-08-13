import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { GeneralService } from '../general';
@Injectable({
  providedIn: 'root'
})
export class AltaUsuariosService {

  url = 'http://localhost:8000/usuarios';
  constructor(public http: HttpClient, private generalService: GeneralService) { }


  createUser(user) {
    return this.http.post(this.url, user, this.generalService.generateHeader());
  }

  getUser(id) {
    return this.http.get(this.url + '?id=' + id, this.generalService.generateHeader());
  }
}
