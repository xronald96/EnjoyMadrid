import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { BarecodeScannerLivestreamComponent } from 'ngx-barcode-scanner';
import { Router } from '@angular/router';
import { AsistenciaRrppService} from '../../services/asistencia-rrpp/asistencia-rrpp.service';
export enum Status {
  Opciones = 1,
  Camara = 2,
  Buscar = 3,
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
  searchText: string;
  curRRPP;
  errorBusqueda = false;
  buscando = false;
  @ViewChild(BarecodeScannerLivestreamComponent)
  barecodeScanner: BarecodeScannerLivestreamComponent;

  constructor(
    private router: Router,
    private asistenciaRRPP: AsistenciaRrppService
    ) {
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
  swapView(nameView: string) {
    this.currentStatus = this.status[nameView];
  }

  search() {
    if (this.searchText && this.searchText !== '') {
      this.asistenciaRRPP.searchByText({toSearch: this.searchText}).then((response) => {
        this.errorBusqueda = false;
        this.buscando = true;
        if (!response[0]) {
          this.errorBusqueda = true;
          this.curRRPP = null;
        } else {
          this.curRRPP = response[0];
        }
      });
    }
  }
}
