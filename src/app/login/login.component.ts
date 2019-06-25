import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { LoginService } from 'src/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  credentials = {};
  constructor(
    private router: Router,
    private loginServive: LoginService,
  ) { }

  ngOnInit() {
  }

  login() {
    if (this.credentials) {
      this.loginServive.login(this.credentials);
      this.router.navigate(['/home']);
    }
  }
}
