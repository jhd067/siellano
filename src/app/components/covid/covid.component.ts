import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';
import {Covid} from '../../models/covid';
import {CovidService} from '../../services/covid.service';
import { Router } from '@angular/router';
import { ExcelExportService } from 'src/app/services/excel-export.service';
import { Table } from 'primeng/table/';
import { MenuItem } from 'primeng/api';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';



@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css']
})

export class CovidComponent implements OnInit {

  public status: string;
  displayDialog: boolean;
  selectedCovid: Covid;


  cars: Covid[];
  cols: any[];
  public responsable: string;
  newCar;
  car: Covid;
  // tslint:disable-next-line:new-parens
  doc: any = new jsPDF;
  casosFilter: any[];
  casos: any[];
  items: MenuItem[];



  constructor(public covidService: CovidService, private router: Router, public excelexport: ExcelExportService) {

   }

  ngOnInit() {
   /* this.covidService.find().subscribe( data => {
       // tslint:disable-next-line:new-parens
      this.data(JSON.stringify(data));

    });*/

    this.cols = [
      { field: 'tipoDocumento', header: 'Tipo de documento' },
      { field: 'numeroDocumento', header: 'N° de Documento' },
      { field: 'primerNombre', header: 'Primer Nombre' },
      { field: 'segundoNombre', header: 'Segundo Nombre' },
      { field: 'primerApellido', header: 'Primer apellido' },
      { field: 'segundoApellido', header: 'Segundo apellido' },
      { field: 'requierePruebaCovid1', header: 'Requiere prueba' },
      { field: 'resultadoFilmArrayPcr', header: 'Film Array Pcr' },
      { field: 'estadoAfectacion', header: 'Estado de afectación' },

  ];

    this.items = [
    // { label: 'Actualizar', icon: 'pi pi-pencil', command: (event) => this.update(this.selectedCaso) },
    { label: 'Generar PDF', icon: 'pi pi-user-minus', command: (event) => this.generarPDF(this.selectedCovid) }

  ];

    this.covidService.find().subscribe( data => {
      this.data(JSON.stringify(data));
    });

  }

  data(data) {
   this.casos = JSON.parse(data);

  }


  create() {
    this.router.navigate(['covidcreate']);
  }



  onRowSelect(event) {

    }


exportAsXLSX(): void {
  this.excelexport.exportAsExcelFile(this.casos, 'casos');
}

exportAsXLSXFilter(e: Table): void {
  console.log(e.filteredValue);
  if (!e.filteredValue) {
    this.casosFilter = [];
    this.casosFilter.push({value: 'No empty'});
  } else {
    const header: any[] = [];
    e.filteredValue.forEach((c) => { header.push(e.filteredValue[c]); });
   // console.log(header);
    this.casosFilter = e.filteredValue;
  }
  this.excelexport.exportAsExcelFile(this.casosFilter, 'casos');
}

generarPDF(data: Covid) {
  function addWaterMark(doc) {
    const totalPages = doc.internal.getNumberOfPages();
    for (let i = 1; i <= totalPages; i++) {
      doc.setPage(i);
      // doc.addImage(imgData, 'PNG', 40, 40, 75, 75);
      doc.setTextColor(150);
      doc.text(85, doc.internal.pageSize.height - 5, 'Copia de uso personal');
    }
    return doc;
  }


  setTimeout(() => {
    this.doc = new jsPDF();

    const img = new Image();
    const src =  './assets/images/logocol.png';
    img.src = src;

    this.doc.addImage(img, 'png', 50, 5, 120, 30) ;
    this.doc.setFontSize(12);
    this.doc.setFontType('bold');
  //  this.doc.setTextColor(78, 3, 234  );
    this.doc.text(105, 45, `Ficha de investigación epidemiológica de campo:`, 'center');
    this.doc.text(105, 50, `Infección respiratoria aguda por nuevo coronavirus (2019-nCoV)`, 'center');
    this.doc.setFontSize(12);
    this.doc.setFontType('bold');
  //  this.doc.setTextColor(78, 3, 234  );
    this.doc.text(21, 65, `DATOS GENERALES DEL PACIENTE`, 'left');
    this.doc.setFontSize(10);
    this.doc.setFontType('normal');
    this.doc.setTextColor(28);
   /* const columns = ['DATOS GENERALES DEL PACIENTE'];
    // tslint:disable-next-line:new-parens
    const conductas = new Array;
    conductas.push([]);
    this.doc.autoTable(columns, conductas,
      { margin: { top: 60, left: 20, right: 20 },
      styles: { halign: 'justify', fontSize: 10 }, theme: 'plain' });*/
    // tslint:disable-next-line:max-line-length
    this.doc.text(21, 75, 'Nombre y apellidos: ' + data.primerNombre + ' ' + data.segundoNombre + ' ' + data.primerApellido + ' ' + data.segundoApellido, 'left');
    this.doc.text(21, 80, 'Tipo de documento: ' + data.tipoDocumento, 'left');
    this.doc.text(21, 85, 'Número de documento: ' + data.numeroDocumento, 'left');
    this.doc.text(21, 90, 'Fecha de nacimiento: ' + data.fechaNacimiento, 'left');
    this.doc.text(21, 95, 'Edad: ' + data.edad + ' ' + data.anios, 'left');
    this.doc.text(21, 100, 'Sexo: ' + data.sexo , 'left');
    this.doc.text(21, 105, 'nacionalidad: ' + data.nacionalidad , 'left');
    this.doc.text(21, 110, 'Residencia: ' + data.departamento + ', ' + data.municipio , 'left');
    this.doc.text(21, 115, 'Dirección: ' + data.direccionDomicilio + ' - ' + data.barrio, 'left');
    this.doc.text(21, 120, 'Zona de residencia: ' + data.zonaResidencial, 'left');
    this.doc.text(21, 125, 'Teléfono de contacto 1: ' + data.telefonosContacto1, 'left');
    this.doc.text(21, 130, 'Teléfono de contacto 2: ' + data.telefonosContacto2, 'left');
    this.doc.text(21, 135, 'Ocupación: ' + data.ocupacion, 'left');


    this.doc.setFontSize(12);
    this.doc.setFontType('bold');
  //  this.doc.setTextColor(78, 3, 234  );
    this.doc.text(21, 145, `ANTECEDENTES DE RIESGO Y EXPOSICIóN`, 'left');
    this.doc.setFontSize(10);
    this.doc.setFontType('normal');
    this.doc.setTextColor(28);
    this.doc.text(21, 155, 'Desplazamientos en los últimos 14 días: ' + data.deplazamiento14dias, 'left');
    this.doc.text(21, 160, 'Lugar de desplazamiento: ' + data.lugarDesplazamiento, 'left');
    // tslint:disable-next-line:max-line-length
    this.doc.text(21, 165, '¿Tuvo contacto cercano con un caso confirmado o probable de infección por 2019-nCoV? ' + data.tuvoContactoCasoCovid, 'left');
  //  this.doc.text(21, 170, 'Lugar del caso confirmado: ' + data.p786, 'left');
    const columnslugar = ['Lugar del caso confirmado'];
    // tslint:disable-next-line:new-parens
    /*
    const lugar = new Array;
    lugar.push([data.descripcionCasoConfirmado]);
    this.doc.autoTable(columnslugar, lugar,
    { margin: { top: 170, left: 20, right: 20 },
    styles: { halign: 'justify', fontSize: 10 }, theme: 'plain' });*/

    this.doc.setFontSize(12);
    this.doc.setFontType('bold');
  //  this.doc.setTextColor(78, 3, 234  );
    this.doc.text(21, 230, `ANTECEDENTES CLÍNICOS Y DE HOSPITALIZACIóN`, 'left');
    this.doc.setFontSize(10);
    this.doc.setFontType('normal');
    this.doc.setTextColor(28);
    this.doc.text(21, 235, 'Fecha de inicio de sintomas: ' + data.fechaInicioSintomas, 'left');
    this.doc.text(21, 240, 'Estado Del Paciente: ' + data.estadoActual, 'left');
    this.doc.addPage();
    const columns = ['Antecedentes clínicos'];
    // tslint:disable-next-line:new-parens
    const conductas = new Array;
    conductas.push([data.antecedentesClinicos]);
    this.doc.autoTable(columns, conductas,
      { margin: { top: 20, left: 20, right: 20 },
      styles: { halign: 'justify', fontSize: 10 }, theme: 'plain' });

    // const columnsFecha1 = ['Fecha de consulta 1'];
    //   // tslint:disable-next-line:new-parens
    // const fecha1 = new Array;
    // fecha1.push([data.p789]);
    // this.doc.autoTable(columnsFecha1, fecha1,
    //     { margin: { top: 20, left: 20, right: 20 },
    //     styles: { halign: 'justify', fontSize: 10 }, theme: 'plain' });

    // const consultacolums = ['Consulta N° 1'];
    // // tslint:disable-next-line:new-parens
    // const consulta = new Array;
    // consulta.push([data.p788]);
    // this.doc.autoTable(consultacolums, consulta,
    //   { margin: { top: 20, left: 20, right: 20 },
    //   styles: { halign: 'justify', fontSize: 10 }, theme: 'plain' });

    // const institucionColums = ['Institución de salud 1'];
    // // tslint:disable-next-line:new-parens
    // const intitucion = new Array;
    // intitucion.push([data.p790]);
    // this.doc.autoTable(institucionColums, intitucion,
    //   { margin: { top: 20, left: 20, right: 20 },
    //   styles: { halign: 'justify', fontSize: 10 }, theme: 'plain' });



    // const columnsFecha2 = ['Fecha de consulta 2'];
    //   // tslint:disable-next-line:new-parens
    // const fecha2 = new Array;
    // fecha2.push([data.p794]);
    // this.doc.autoTable(columnsFecha2, fecha2,
    //     { margin: { top: 20, left: 20, right: 20 },
    //     styles: { halign: 'justify', fontSize: 10 }, theme: 'plain' });

    // const consultacolums2 = ['Consulta N° 2'];
    // // tslint:disable-next-line:new-parens
    // const consulta2 = new Array;
    // consulta2.push([data.p791]);
    // this.doc.autoTable(consultacolums2, consulta2,
    //   { margin: { top: 20, left: 20, right: 20 },
    //   styles: { halign: 'justify', fontSize: 10 }, theme: 'plain' });

    // const institucionColums2 = ['Institución de salud 2'];
    // // tslint:disable-next-line:new-parens
    // const intitucion2 = new Array;
    // intitucion2.push([data.p792]);
    // this.doc.autoTable(institucionColums2, intitucion2,
    //   { margin: { top: 20, left: 20, right: 20 },
    //   styles: { halign: 'justify', fontSize: 10 }, theme: 'plain' });

    // const columnsFecha3 = ['Fecha de consulta 3'];
    //   // tslint:disable-next-line:new-parens
    // const fecha3 = new Array;
    // fecha3.push([data.p799]);
    // this.doc.autoTable(columnsFecha3, fecha3,
    //     { margin: { top: 20, left: 20, right: 20 },
    //     styles: { halign: 'justify', fontSize: 10 }, theme: 'plain' });

    // const consultacolums3 = ['Consulta N° 3'];
    // // tslint:disable-next-line:new-parens
    // const consulta3 = new Array;
    // consulta3.push([data.p793]);
    // this.doc.autoTable(consultacolums3, consulta3,
    //   { margin: { top: 20, left: 20, right: 20 },
    //   styles: { halign: 'justify', fontSize: 10 }, theme: 'plain' });

    // const institucionColums3 = ['Institución de salud 2'];
    // // tslint:disable-next-line:new-parens
    // const intitucion3 = new Array;
    // intitucion3.push([data.p797]);
    // this.doc.autoTable(institucionColums3, intitucion3,
    //   { margin: { top: 20, left: 20, right: 20 },
    //   styles: { halign: 'justify', fontSize: 10 }, theme: 'plain' });

    // const columnsFecha4 = ['Fecha de consulta 4'];
    //   // tslint:disable-next-line:new-parens
    // const fecha4 = new Array;
    // fecha4.push([data.p796]);
    // this.doc.autoTable(columnsFecha4, fecha4,
    //     { margin: { top: 20, left: 20, right: 20 },
    //     styles: { halign: 'justify', fontSize: 10 }, theme: 'plain' });

    // const consultacolums4 = ['Consulta N° 4'];
    // // tslint:disable-next-line:new-parens
    // const consulta4 = new Array;
    // consulta4.push([data.p795]);
    // this.doc.autoTable(consultacolums4, consulta4,
    //   { margin: { top: 20, left: 20, right: 20 },
    //   styles: { halign: 'justify', fontSize: 10 }, theme: 'plain' });

    // const institucionColums4 = ['Institución de salud 4'];
    // // tslint:disable-next-line:new-parens
    // const intitucion4 = new Array;
    // intitucion4.push([data.p798]);
    // this.doc.autoTable(institucionColums4, intitucion4,
    //   { margin: { top: 20, left: 20, right: 20 },
    //   styles: { halign: 'justify', fontSize: 10 }, theme: 'plain' });




    // const signoscolums = ['Signos y síntomas al ingreso y días previos'];
    //   // tslint:disable-next-line:new-parens
    // const signos = new Array;

    // signos.push(['Tos seca: ' + data. + ' Dificultad respiratoria: ' + data.p802]);
    // signos.push(['Taquipnea: ' + data.p803 + ' Dolor de garganta: ' + data.p804]);
    // signos.push(['Escalofríos: ' + data.p805 + ' Nauseas: ' + data.p806]);
    // signos.push(['Vomito: ' + data.p807 + ' Dolor torácico: ' + data.p808]);
    // signos.push(['Mialgia: ' + data.p809 + ' diarrea: ' + data.p810]);
    // signos.push(['Dolor Abdominal: ' + data.p811 + ' Dolor de cabeza: ' + data.p812]);
    // signos.push(['Malestar general: ' + data.p813 + ' Perdida del gusto: ' + data.p816]);
    // signos.push(['Perdida del olfato: ' + data.p817]);
    // this.doc.autoTable(signoscolums, signos,
    //     { margin: { top: 20, left: 20, right: 20 },
    //     styles: { halign: 'justify', fontSize: 10 }, theme: 'striped' });


    const comorbilidadescolums = ['COMORBILIDADES/ FACTORES DE RIESGO'];
        // tslint:disable-next-line:new-parens
    const comorbilidades = new Array;

    comorbilidades.push(['Asma: ' + data.asma + ' Enfermedad Pulmonar Crónica: ' + data.enfermedadPulmonarCronica]);
    // tslint:disable-next-line:max-line-length
    comorbilidades.push(['Trastorno Neurológico Crónico: ' + data.trastornoNeurologicoCronico + ' Inmunosupresión: ' + data.inmunosupresion]);
    comorbilidades.push(['Enfermedad Renal Crónica: ' + data.enfermedadRenalCronica + ' Enfermedad Cardíaca: ' + data.enfermedadCardiaca]);
    comorbilidades.push(['Enfermedad Hematológica Crónica: ' + data.enfermedadHematologicaCronica + ' Hipertensión: ' + data.hipertension]);
    comorbilidades.push(['diabetes: ' + data.diabetes + ' Obesidad: ' + data.obesidad]);
    comorbilidades.push(['Enfermedad Hepática Crónica: ' + data.enfermedadHepaticaCronica + ' Embarazo: ' + data.embarazo]);
    comorbilidades.push(['Tabaquismo: ' + data.tabaquismo + ' Alcoholismo: ' + data.alcoholismo]);
    comorbilidades.push(['Trastorno Reumatológico: ' + data.trastornoReumatologico]);
    this.doc.autoTable(comorbilidadescolums, comorbilidades,
          { margin: { top: 20, left: 20, right: 20 },
          styles: { halign: 'justify', fontSize: 10 }, theme: 'striped' });


    // const laboratoricolums = ['DATOS DE LABORATORIO'];
    // // tslint:disable-next-line:new-parens
    // const laboratorio = new Array;
    // laboratorio.push(['¿Ya fue tomada la muesta? ' + data.fue]);
    // this.doc.autoTable(laboratoricolums, laboratorio,
    //   { margin: { top: 20, left: 20, right: 20 },
    //   styles: { halign: 'justify', fontSize: 12 }, theme: 'plain' });


    // const laboratoricolums1 = ['Fecha toma de muestra'];
    //   // tslint:disable-next-line:new-parens
    // const laboratorio1 = new Array;
    // laboratorio1.push([data.fecha]);
    // this.doc.autoTable(laboratoricolums1, laboratorio1,
    //     { margin: { top: 20, left: 20, right: 20 },
    //     styles: { halign: 'justify', fontSize: 10 }, theme: 'plain' });

    // const laboratoricolums2 = ['Tipo de muestra'];
    //     // tslint:disable-next-line:new-parens
    // const laboratorio2 = new Array;
    // laboratorio2.push([data.p837]);
    // this.doc.autoTable(laboratoricolums2, laboratorio2,
    //       { margin: { top: 20, left: 20, right: 20 },
    //       styles: { halign: 'justify', fontSize: 10 }, theme: 'plain' });

    // const laboratoricolums3 = ['Film Array Pcr'];
    //       // tslint:disable-next-line:new-parens
    // const laboratorio3 = new Array;
    // laboratorio3.push([data.p838]);
    // this.doc.autoTable(laboratoricolums3, laboratorio3,
    //         { margin: { top: 20, left: 20, right: 20 },
    //         styles: { halign: 'justify', fontSize: 10 }, theme: 'plain' });

    // const laboratoricolums4 = ['Datos de personas con las que haya tenido contacto'];
    //         // tslint:disable-next-line:new-parens
    // const laboratorio4 = new Array;
    // laboratorio4.push([data.p898]);
    // this.doc.autoTable(laboratoricolums4, laboratorio4,
    //           { margin: { top: 20, left: 20, right: 20 },
    //           styles: { halign: 'justify', fontSize: 10 }, theme: 'plain' });

    // const laboratoricolums5 = ['Entrevista con el paciente'];
    //           // tslint:disable-next-line:new-parens
    // const laboratorio5 = new Array;
    // laboratorio5.push([data.p840]);
    // this.doc.autoTable(laboratoricolums5, laboratorio5,
    //             { margin: { top: 20, left: 20, right: 20 },
    //             styles: { halign: 'justify', fontSize: 10 }, theme: 'plain' });

   /* const laboratoricolums6 = ['Motivo De Aislamiento: '];
                // tslint:disable-next-line:new-parens
    const laboratorio6 = new Array;
    laboratorio6.push([]);
    this.doc.autoTable(laboratoricolums6, laboratorio6,
                  { margin: { top: 20, left: 20, right: 20 },
                  styles: { halign: 'justify', fontSize: 10 }, theme: 'plain' });

    const laboratoricolums7 = ['Tipo De Tratamiento: '];
                  // tslint:disable-next-line:new-parens
    const laboratorio7 = new Array;
    laboratorio7.push([]);
    this.doc.autoTable(laboratoricolums7, laboratorio7,
                    { margin: { top: 20, left: 20, right: 20 },
                    styles: { halign: 'justify', fontSize: 10 }, theme: 'plain' });

    const laboratoricolums8 = ['Persona En Aislamiento Y Tipo De Vivienda: '];
                    // tslint:disable-next-line:new-parens
    const laboratorio8 = new Array;
    laboratorio8.push([]);
    this.doc.autoTable(laboratoricolums8, laboratorio8,
                      { margin: { top: 20, left: 20, right: 20 },
                      styles: { halign: 'justify', fontSize: 10 }, theme: 'plain' });*/


    // const seguimientocolums1 = ['Fecha de seguimiento día 1: ' + data.p842];
    //                   // tslint:disable-next-line:new-parens
    // const seguimiento1 = new Array;
    // seguimiento1.push(['Seguimiento día 1: ' + data.p841]);
    // this.doc.autoTable(seguimientocolums1, seguimiento1,
    //                     { margin: { top: 20, left: 20, right: 20 },
    //                     styles: { halign: 'justify', fontSize: 10 }, theme: 'plain' });

    // const seguimientocolums2 = ['Fecha de seguimiento día 2: ' + data.p844];
    //                     // tslint:disable-next-line:new-parens
    // const seguimiento2 = new Array;
    // seguimiento2.push(['Seguimiento día 2: ' + data.p843]);
    // this.doc.autoTable(seguimientocolums2, seguimiento2,
    //                       { margin: { top: 20, left: 20, right: 20 },
    //                       styles: { halign: 'justify', fontSize: 10 }, theme: 'plain' });


    // const seguimientocolums3 = ['Fecha de seguimiento día 3: ' + data.p845];
    //                       // tslint:disable-next-line:new-parens
    // const seguimiento3 = new Array;
    // seguimiento3.push(['Seguimiento día 3: ' + data.p846]);
    // this.doc.autoTable(seguimientocolums3, seguimiento3,
    //                         { margin: { top: 20, left: 20, right: 20 },
    //                         styles: { halign: 'justify', fontSize: 10 }, theme: 'plain' });



    // const seguimientocolums4 = ['Fecha de seguimiento día 4: ' + data.p847];
    //                         // tslint:disable-next-line:new-parens
    // const seguimiento4 = new Array;
    // seguimiento4.push(['Seguimiento día 4: ' + data.p848]);
    // this.doc.autoTable(seguimientocolums4, seguimiento4,
    //                           { margin: { top: 20, left: 20, right: 20 },
    //                           styles: { halign: 'justify', fontSize: 10 }, theme: 'plain' });

    // const seguimientocolums5 = ['Fecha de seguimiento día 5: ' + data.p849];
    //                           // tslint:disable-next-line:new-parens
    // const seguimiento5 = new Array;
    // seguimiento5.push(['Seguimiento día 5: ' + data.p850]);
    // this.doc.autoTable(seguimientocolums5, seguimiento5,
    //                             { margin: { top: 20, left: 20, right: 20 },
    //                             styles: { halign: 'justify', fontSize: 10 }, theme: 'plain' });

    // const seguimientocolums6 = ['Fecha de seguimiento día 6: ' + data.p851];
    //                             // tslint:disable-next-line:new-parens
    // const seguimiento6 = new Array;
    // seguimiento6.push(['Seguimiento día 6: ' + data.p852]);
    // this.doc.autoTable(seguimientocolums6, seguimiento6,
    //                               { margin: { top: 20, left: 20, right: 20 },
    //                               styles: { halign: 'justify', fontSize: 10 }, theme: 'plain' });

    // const seguimientocolums7 = ['Fecha de seguimiento día 7: ' + data.p853];
    //                               // tslint:disable-next-line:new-parens
    // const seguimiento7 = new Array;
    // seguimiento7.push(['Seguimiento día 7: ' + data.p856]);
    // this.doc.autoTable(seguimientocolums7, seguimiento6,
    //                                 { margin: { top: 20, left: 20, right: 20 },
    //                                 styles: { halign: 'justify', fontSize: 10 }, theme: 'plain' });


    // const seguimientocolums8 = ['Fecha de seguimiento día 8: ' + data.p855];
    //                                 // tslint:disable-next-line:new-parens
    // const seguimiento8 = new Array;
    // seguimiento8.push(['Seguimiento día 7: ' + data.p854]);
    // this.doc.autoTable(seguimientocolums8, seguimiento8,
    //                                   { margin: { top: 20, left: 20, right: 20 },
    //                                   styles: { halign: 'justify', fontSize: 10 }, theme: 'plain' });


    // const seguimientocolums9 = ['Fecha de seguimiento día 9: ' + data.p857];
    //                                   // tslint:disable-next-line:new-parens
    // const seguimiento9 = new Array;
    // seguimiento9.push(['Seguimiento día 9: ' + data.p858]);
    // this.doc.autoTable(seguimientocolums9, seguimiento9,
    //                                     { margin: { top: 20, left: 20, right: 20 },
    //                                     styles: { halign: 'justify', fontSize: 10 }, theme: 'plain' });



    // const seguimientocolums10 = ['Fecha de seguimiento día 10: ' + data.p859];
    //                                     // tslint:disable-next-line:new-parens
    // const seguimiento10 = new Array;
    // seguimiento10.push(['Seguimiento día 10: ' + data.p860]);
    // this.doc.autoTable(seguimientocolums10, seguimiento10,
    //                                       { margin: { top: 20, left: 20, right: 20 },
    //                                       styles: { halign: 'justify', fontSize: 10 }, theme: 'plain' });


    // const seguimientocolums11 = ['Fecha de seguimiento día 11: ' + data.p861];
    //                                       // tslint:disable-next-line:new-parens
    // const seguimiento11 = new Array;
    // seguimiento11.push(['Seguimiento día 11: ' + data.p862]);
    // this.doc.autoTable(seguimientocolums11, seguimiento11,
    //                                         { margin: { top: 20, left: 20, right: 20 },
    //                                         styles: { halign: 'justify', fontSize: 10 }, theme: 'plain' });

    // const seguimientocolums12 = ['Fecha de seguimiento día 12: ' + data.p863];
    //                                         // tslint:disable-next-line:new-parens
    // const seguimiento12 = new Array;
    // seguimiento12.push(['Seguimiento día 12: ' + data.p864]);
    // this.doc.autoTable(seguimientocolums12, seguimiento12,
    //                                           { margin: { top: 20, left: 20, right: 20 },
    //                                           styles: { halign: 'justify', fontSize: 10 }, theme: 'plain' });


    // const seguimientocolums13 = ['Fecha de seguimiento día 13: ' + data.p865];
    //                                           // tslint:disable-next-line:new-parens
    // const seguimiento13 = new Array;
    // seguimiento13.push(['Seguimiento día 13: ' + data.p866]);
    // this.doc.autoTable(seguimientocolums13, seguimiento13,
    //                                             { margin: { top: 20, left: 20, right: 20 },
    //                                             styles: { halign: 'justify', fontSize: 10 }, theme: 'plain' });

    // const seguimientocolums14 = ['Fecha de seguimiento día 14: ' + data.p867];
    //                                             // tslint:disable-next-line:new-parens
    // const seguimiento14 = new Array;
    // seguimiento14.push(['Seguimiento día 14: ' + data.p868]);
    // this.doc.autoTable(seguimientocolums14, seguimiento14,
    //                                               { margin: { top: 20, left: 20, right: 20 },
    //                                               styles: { halign: 'justify', fontSize: 10 }, theme: 'plain' });


    this.doc.save('ficha-' + data.numeroDocumento + '.pdf');

  }, 500);

}

}
