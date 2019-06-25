import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AltaRRPPService } from 'src/services/alta-rrpps/altaRRPP.service';

@Component({
  selector: 'app-alta-rrpp',
  templateUrl: './alta-rrpp.component.html',
  styleUrls: ['./alta-rrpp.component.scss']
})
export class AltaRrppComponent implements OnInit {
  curRRPP: FormGroup;
  submitted  = false;
  alert = false;
  constructor(public formBuilder: FormBuilder,
              public router: Router,
              private altaRRPP: AltaRRPPService) { }

  ngOnInit() {
    this.curRRPP = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      surname:  ['', [Validators.required, Validators.minLength(2)]],
      email:  ['', [Validators.required, Validators.email]],
      birthday:  ['', [Validators.required]],
      dni:  ['', [Validators.required, Validators.minLength(8)]],
      teamBoss:  ['', [Validators.required, Validators.minLength(1)]],
    });
  }

  get f() { return this.curRRPP.controls; } // Get the form

  create() {
    this.submitted  = true;
    if (this.curRRPP.valid) {
      this.altaRRPP.newRRPP(this.curRRPP.value).subscribe((result) => {
        console.log('Resultado', result);
        this.curRRPP.reset();
        this.submitted  = false;
      }, this.altaRRPP.handleError);
    }
  }
  onFileChange(event) {
    console.log(event.target.files);
    const formData: FormData = new FormData();
    for (const file of event.target.files) {
      formData.append(file.name, file); // file.name is optional
  }
    console.log('form data', formData);
    this.altaRRPP.importRRPPs(formData).subscribe((result) => {
      console.log('Resultado', result);
    }, this.altaRRPP.handleError);
  }
}
