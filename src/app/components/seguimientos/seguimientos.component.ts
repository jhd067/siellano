import { Component, OnInit } from '@angular/core';
import {Covid} from '../../models/covid';
import {SelectItem} from 'primeng/api';
import {CovidService} from '../../services/covid.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seguimientos',
  templateUrl: './seguimientos.component.html',
  styleUrls: ['./seguimientos.component.css']
})
export class SeguimientosComponent implements OnInit {
  date3: Date;
  cars: Covid[];
  cols: any[];
  public responsable: string;
  newCar;
  car: Covid;
  casos: any[];
  selectedCovid: Covid;

  constructor(public covidService: CovidService, private router: Router) {
  }

  ngOnInit(): void {


    this.cols = [
      { field: 'numero_de_seguimiento', header: 'Numero de seguimiento' },
      { field: 'fecha', header: 'Fecha de Seguimiento' },
      { field: 'descripcion', header: 'Descripcion' },
      { field: 'Institucion_Salud', header: 'Institucion de Salud' },

  ];

    this.casos = [ {
    numero_de_seguimiento: '1',
    fecha: '01/05/2020',
    descripcion: 'tos',
    Institucion_Salud: 'Coomeva'
  },
  {
    numero_de_seguimiento: '2',
    fecha: '01/05/2020',
    descripcion: 'dolor',
    Institucion_Salud: 'Coomeva'
  }];

  }
  onRowSelect(event) {

  }
  back() {
    this.router.navigate(['covidcreate']);
  }
}
