import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RrppsService } from 'src/services/rrpps/altaRRPP.service';
import {GeneralService} from '../../services/general';
import { debounceTime } from 'rxjs/operators';

export enum Status {
  Opciones = 1,
  Alta = 2,
  Perfil = 3,
}



@Component({
  selector: 'app-alta-rrpp',
  templateUrl: './alta-rrpp.component.html',
  styleUrls: ['./alta-rrpp.component.scss']
})
export class RrppComponent implements OnInit {
  toSearch = new FormControl();
  status = Status;
  currentStatus: Status;
  curRRPP: FormGroup;
  submitted  = false;
  alert = false;
  listBosses;
  listRelaciones;
  constructor(public formBuilder: FormBuilder,
              public router: Router,
              private rrppService: RrppsService,
              private generalService: GeneralService) {
                 this.currentStatus = this.status.Opciones;

              }

  ngOnInit() {
    this.curRRPP = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      surname:  ['', [Validators.required, Validators.minLength(2)]],
      email:  ['', [Validators.required, Validators.email]],
      birthday:  ['', [Validators.required]],
      listName:  ['', [Validators.required, Validators.minLength(1)]],
      idBoss:  [null],
      rrpp:  ['', [Validators.required]],
    });
    this.updateValidators();
    this.toSearch.valueChanges.pipe(debounceTime(300)).subscribe( data => {
      this.rrppService.getAllRRPPs(data).then(res => this.listRelaciones = res).catch(this.generalService.handleError);
    });
  }

  get f() {
    return this.curRRPP.controls;
  } // Get the form

  create() {
    this.submitted  = true;
    if (this.curRRPP.valid) {
      // Vambiar teamBoss Por idBoss
      this.rrppService.newRRPP(this.curRRPP.value).subscribe((result) => {
        this.curRRPP.reset();
        this.submitted  = false;
      }, this.generalService.handleError);
    }
  }
  onFileChange(event) {
    console.log(event.target.files);
    const formData: FormData = new FormData();
    for (const file of event.target.files) {
      formData.append(file.name, file); // file.name is optional
  }
    console.log('form data', formData);
    this.rrppService.importRRPPs(formData).subscribe((result) => {
      console.log('Resultado', result);
    }, this.generalService.handleError);
  }

  updateValidators() {
   this.curRRPP.get('rrpp').valueChanges.subscribe(rrpp => {
      if (rrpp === 'RRPP') {
        this.f.idBoss.setValidators([Validators.required]);
      } else if (rrpp === 'JEFE') {
        this.f.idBoss.setValidators(null);
      }
      this.curRRPP.controls.idBoss.updateValueAndValidity();
    });
  }

  swapView(nameView: string) {
    if (nameView === 'Alta') {
      this.rrppService.getBosses().subscribe((res) => {
        this.listBosses = res;
      });
    } else if (nameView === 'Perfil') {
      this.rrppService.getAllRRPPs('').then(res => this.listRelaciones = res).catch(this.generalService.handleError);
    }
    this.currentStatus = this.status[nameView];
  }
}
