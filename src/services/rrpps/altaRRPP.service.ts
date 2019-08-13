import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { GeneralService} from '../general';
@Injectable({
  providedIn: 'root'
})
export class RrppsService {

  url = 'http://localhost:8000/rrpps';
  constructor(public http: HttpClient, private router: Router, private route: ActivatedRoute, private generalService: GeneralService) { }

  importRRPPs(files: object) {
    return this.http.post(this.url + '/import-rrpp', files, this.generalService.generateHeader());
  }

  newRRPP(rrpp: object) {
    return this.http.post(this.url + '/new-rrpp', rrpp, this.generalService.generateHeader());
  }

  getBosses() {
    return this.http.get(this.url + '/select-boss', this.generalService.generateHeader());
  }

  getAllRRPPs(toSearch: string) { // Array.from
    return this.http.get(this.url + '/getAll?toSearch=' + toSearch || 'null', this.generalService.generateHeader()).toPromise();
  }
}
