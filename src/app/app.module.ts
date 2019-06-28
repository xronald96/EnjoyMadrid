import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AsistenciaRrppComponent } from './asistencia-rrpp/asistencia-rrpp.component';
import { BarecodeScannerLivestreamModule } from 'ngx-barcode-scanner';
import { AltaRrppComponent } from './alta-rrpp/alta-rrpp.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HistorialRecuentosComponent } from './historial-recuentos/historial-recuentos.component';
import { ListsComponent } from './lists/lists.component';
const appRoutes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'asistencia-rrpp', component: AsistenciaRrppComponent},
  {path: 'alta-rrpp', component: AltaRrppComponent},
  {path: 'lista', component: ListsComponent},
  {path: 'historial-recuentos', component: HistorialRecuentosComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AsistenciaRrppComponent,
    AltaRrppComponent,
    ListsComponent,
    HistorialRecuentosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BarecodeScannerLivestreamModule,
    ReactiveFormsModule,
    // RouterModule.forRoot(
    //   appRoutes,
    //   { enableTracing: true } // <-- debugging purposes only
    // ),
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
