export class Covid {
   // tslint:disable-next-line:variable-name
   _id: any;
   idUser: any;
   perfil: any;
   idCovid: any;
   quienReportaCaso: any;
   // Datos del paciente */
   primerNombre: any;
   segundoNombre: any;
   primerApellido: any;
   segundoApellido: any;
   tipoDocumento: any;
   numeroDocumento: any;
   fechaNacimiento: any;
   edad: any;
   anios: any;
   anoMesesDias: any;
   sexo: any;
   etnia: any;
   nacionalidad: any;
   otraNacionalidad: any;
   direccionDomicilio: any;
   barrio: any;
   estrato: any;
   comuna: any;
   departamento: any;
   municipio: any;
   otroMunicipio: any;
   eps: any;
   tipoAseguramiento: any;
   zonaResidencial: any;
   telefonosContacto1: any;
   telefonosContacto2: any;
   ocupacion: any;
   otraOcupacion: any;
   // Antecedentes de riesgo y exposicion */
   sospechaDengue: any;
   sospechaCovid: any;
   deplazamiento14dias: any;
   lugarDesplazamiento: any;
   paisesVisitados: any;
   periodoEstadiaDias: any;
   boletoAvionRegreso: any;
   tuvoContactoCasoCovid: any;
    /** descripcionCasoConfirmado */
    descripcionCasoConfirmado: {
      documentoCasoConfirmado: any;
      nombreCasoConfirmado: any;
      telefonoCasoConfirmado: any;
      lugarCasoConfirmado: any;
  };

   // Antecedentes clinicos y de hospitalizacion */
   estadoActual: any;
   definicionCaso: any;
   tipoCaso: any;
   fechaInicioSintomas: any;
   antecedentesClinicos: any;
   institucionSalud: any;
   // Comorbilidades o factores de riesgo */
   asma: any;
   enfermedadPulmonarCronica: any;
   trastornoNeurologicoCronico: any;
   inmunosupresion: any;
   enfermedadRenalCronica: any;
   enfermedadCardiaca: any;
   enfermedadHematologicaCronica: any;
   hipertension: any;
   diabetes: any;
   obesidad: any;
   enfermedadHepaticaCronica: any;
   embarazo: any;
   semanasGestacion: any;
   tabaquismo: any;
   alcoholismo: any;
   trastornoReumatologico: any;
   otroFactorRiesgo: any;
   cualFactorRiesgo: any;
   // Datos laboratorio */
   igmDengue: any;
   requierePruebaDengue: any;
   fechaProgramadaPuebaDengue: any;
   fechaTomaPruebaDengue: any;
   tipoPruebaDengue: any;
   resultadoPruebaDengue: any;
   fueTomdadaPruebaDengue: any;
   requierePruebaCovid1: any;
   fechaProgramadaPruebaCovid1: any;
   observacionPruebaCovid1: any;
   fueTomdadaPruebaCovid1: any;
   fechaTomaPruebaCovid1: any;
   tipoPruebaCovid1: any;
   resultadoFilmArrayPcr: any;
   resultadoHemograma: any;
   personasQueHayaTenidoContacto: [{
      documentoContacto: any;
      nombreContacto: any;
      telefonoContacto: any;
      ubicacionDireccion: any;
  }];
   // Entrevista con el paciente */
   entrevistaPaciente: any;
   ipsTratante: any;
   ambitoAtencion: any;
   otroAmbito: any;
   tipoViviendaAislamiento: any[];
     // Segumientos */
   seguimientos: [{
      dia: any;
      fecha: Date;
      ambitoAtencionSeguimiento: any;
      detalle: any;
      // Signos y sintomas al ingreso y dias previos */
      tosSeca: any;
      fiebreCuantificada: any;
      temperatuda: any;
      dificultadRespiratoria: any;
      taquipnea: any;
      dolorGarganta: any;
      escalofrios: any;
      nauseas: any;
      vomito: any;
      dolorToracico: any;
      mialgia: any;
      diarrea: any;
      dolorAbdominal: any;
      dolorCabeza: any;
      malestarGeneral: any;
      perdidaGusto: any;
      perdidaOlfato: any;
      otroSignoSintomas: any;
      clasificacionRiesgo: any;
   }];

    // Seguimientos */
    seguimientosReinfectado: [{
      dia: any;
      fecha: Date;
      ambitoAtencionSeguimiento: any;
      detalle: any;
      // Signos y sintomas al ingreso y dias previos */
      tosSeca: any;
      fiebreCuantificada: any;
      temperatura: any;
      dificultadRespiratoria: any;
      taquipnea: any;
      dolorGarganta: any;
      escalofrios: any;
      nauseas: any;
      vomito: any;
      dolorToracico: any;
      mialgia: any;
      diarrea: any;
      dolorAbdominal: any;
      dolorCabeza: any;
      malestarGeneral: any;
      perdidaGusto: any;
      perdidaOlfato: any;
      otroSignoSintomas: any;
      clasificacionRiesgo: any;
  }];
  requierePrueba2: any;
  fechaTomaMuestra2: Date;
  tipoMuestra2: any;
  resultadoMuestra2: any;
  personaReporta: any;
  casoFinalizado: any;
  siNoFinalizaProcedimientoASeguir: any;
  responsableSeguimiento: any;
  estadoAfectacion: any;
  documentoCasoConfirmado: any;
  nombreCasoConfirmado: any;
  telefonoCasoConfirmado: any;
  lugarCasoConfirmado: any;

}
