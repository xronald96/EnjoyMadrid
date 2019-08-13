import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { GeneralService} from '../general';

@Injectable({
  providedIn: 'root'
})
export class AsistenciaRrppService {

  url = 'http://localhost:8000/asistencia-rrpp';
  constructor(public http: HttpClient, private generalService: GeneralService) { }


  searchByText(textToSearch) {
    const headers = this.generalService.generateHeader();
    return this.http.post(this.url, textToSearch, headers).toPromise();
  }

  signAssistance(idRRPP) {
    return this.http.post(this.url + '/sign', idRRPP, this.generalService.generateHeader()).toPromise();
  }
}
