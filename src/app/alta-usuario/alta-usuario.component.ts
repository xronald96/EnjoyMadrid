import { Component, OnInit } from '@angular/core';
import { AltaUsuariosService } from '../../services/usuarios/alta-usuarios.service';
import { DiscotecasService } from '../../services/discotecas/discotecas.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-alta-usuario',
  templateUrl: './alta-usuario.component.html',
  styleUrls: ['./alta-usuario.component.scss']
})
export class AltaUsuarioComponent implements OnInit {

  curUser: FormGroup;
  submitted  = false;
  discotecas;
  constructor(public formBuilder: FormBuilder,
              public router: Router,
              private servicesUser: AltaUsuariosService,
              private discoSerice: DiscotecasService)  {
                this.discoSerice.getDiscotecas().subscribe(res => {
                  this.discotecas = res;
                });
               }

  ngOnInit() {
    this.curUser = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      surname:  ['', [Validators.required, Validators.minLength(2)]],
      email:  ['', [Validators.required, Validators.email]],
      password:  ['', [Validators.required]],
      confirmPassword:  ['', [Validators.required]],
      idCompani:  ['', [Validators.required]],
    });
  }

  get f() { return this.curUser.controls; } // Get the form

  create() {
    this.submitted  = true;
    if (this.curUser.valid && this.curUser.get('password').value === this.curUser.get('confirmPassword').value) {
      this.servicesUser.createUser(this.curUser.value).subscribe((res) => {
      this.submitted  = false;
      });
    }
  }
}
