import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { RrppsService } from 'src/services/rrpps/altaRRPP.service';

@Component({
  selector: 'app-alta-rrpp',
  templateUrl: './alta-rrpp.component.html',
  styleUrls: ['./alta-rrpp.component.scss']
})
export class RrppComponent implements OnInit {
  curRRPP: FormGroup;
  submitted  = false;
  alert = false;
  listBosses;
  constructor(public formBuilder: FormBuilder,
              public router: Router,
              private rrppService: RrppsService) {
                 this.rrppService.getBosses().subscribe((res) => {
                   this.listBosses = res;
                 });
              }

  ngOnInit() {
    this.curRRPP = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      surname:  ['', [Validators.required, Validators.minLength(2)]],
      email:  ['', [Validators.required, Validators.email]],
      birthday:  ['', [Validators.required]],
      dni:  ['', [Validators.required, Validators.minLength(8)]],
      idBoss:  ['', [Validators.required, Validators.minLength(1)]],
      rrpp:  ['', [Validators.required]],
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
      }, this.rrppService.handleError);
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
    }, this.rrppService.handleError);
  }
}
