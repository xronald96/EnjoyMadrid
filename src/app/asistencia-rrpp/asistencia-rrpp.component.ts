import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { BarecodeScannerLivestreamComponent } from 'ngx-barcode-scanner';
import { Router } from '@angular/router';

export enum Status {
  Opciones = 1,
  Camara = 2,
}

@Component({
  selector: 'app-asistencia-rrpp',
  templateUrl: './asistencia-rrpp.component.html',
  styleUrls: ['./asistencia-rrpp.component.scss']
})
export class AsistenciaRrppComponent implements OnInit, AfterViewInit {
  status = Status;
  currentStatus: Status;
  barcodeValue: any;
  @ViewChild(BarecodeScannerLivestreamComponent)
  barecodeScanner: BarecodeScannerLivestreamComponent;

  constructor(private router: Router) {
    this.currentStatus = this.status.Opciones;
   }

  ngOnInit() {
  }
  ngAfterViewInit() {
    // this.barecodeScanner.start();
  }

  onValueChanges(result) {
    this.barcodeValue = result.codeResult.code;
  }

  scan() {
    this.currentStatus = this.status.Camara;
  }
}
