import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Covid } from '../../models/covid';
import { CovidService } from '../../services/covid.service';
@Component({
  selector: 'app-covidcreate',
  templateUrl: './covidcreate.component.html',
  styleUrls: ['./covidcreate.component.css'],
  providers: [MessageService]
})
export class CovidcreateComponent implements OnInit {
  covid: Covid;

  selectQuienReportaCaso;
  selectTipoDocumento;
  selectZonaResidencial;
  selectTipoAseguramiento;
  selectEps;
  selectTipoViviendaAislamiento;
  selectMunicipio;
  selectBarrio;
  selectNacionalidad;
  selectDepartamento;
  selectSexo;
  selectAnoMesesDias;
  selectOcupacion;


  quienReportaCaso: any;
  /** Datos del paciente */
  primerNombre: any;
  segundoNombre: any;
  primerApellido: any;
  segundoApellido: any;
  tipoDocumento: any = 'CÉDULA DE CIUDADANÍA';
  numeroDocumento: any;
  fechaNacimiento: any;
  edad: any;
  anios: any;
  anoMesesDias: any;
  sexo: any;
  etnia: any;
  nacionalidad: any = 'COLOMBIANO';
  otraNacionalidad: any;
  direccionDomicilio: any;
  barrio: any;
  estrato: any;
  comuna: any;
  departamento: any = 'VALLE DEL CAUCA';
  municipio: any = 'PALMIRA';
  otroMunicipio: any;
  eps: any;
  tipoAseguramiento: any;
  zonaResidencial: any = 'URBANA';
  telefonosContacto1: any;
  telefonosContacto2: any;
  ocupacion: any;
  otraOcupacion: any;
  /** Antecedentes de riesgo y exposicion */
  sospechaDengue: any = 'NO';
  sospechaCovid: any = 'NO';
  deplazamiento14dias: any = 'NO';
  lugarDesplazamiento: any;
  paisesVisitados: any;
  periodoEstadiaDias: any;
  boletoAvionRegreso: any;
  tuvoContactoCasoCovid: any = 'NO';
  /** descripcionCasoConfirmado */
  documentoCasoConfirmado: any;
  nombreCasoConfirmado: any;
  telefonoCasoConfirmado: any;
  lugarCasoConfirmado: any;
  /** Antecedentes clinicos y de hospitalizacion */
  estadoActual: any;
  definicionCaso: any;
  tipoCaso: any = 'CASO EN ESTUDIO';
  fechaInicioSintomas: any;
  antecedentesClinicos: any;
  institucionSalud: any;
  /** Comorbilidades o factores de riesgo */
  asma: any = 'NO';
  enfermedadPulmonarCronica: any = 'NO';
  trastornoNeurologicoCronico: any = 'NO';
  inmunosupresion: any = 'NO';
  enfermedadRenalCronica: any = 'NO';
  enfermedadCardiaca: any = 'NO';
  enfermedadHematologicaCronica: any = 'NO';
  hipertension: any = 'NO';
  diabetes: any = 'NO';
  obesidad: any = 'NO';
  enfermedadHepaticaCronica: any = 'NO';
  embarazo: any = 'NO';
  semanasGestacion: any = 'NO';
  tabaquismo: any = 'NO';
  alcoholismo: any = 'NO';
  trastornoReumatologico: any = 'NO';
  otroFactorRiesgo: any;
  cualFactorRiesgo: any = 'NO';
  /** Datos laboratorio */
  igmDengue: any = 'NO';
  requierePruebaDengue: any;
  fechaProgramadaPuebaDengue: any;
  fechaTomaPruebaDengue: any;
  tipoPruebaDengue: any;
  resultadoPruebaDengue: any = 'NO PROCESADO';
  fueTomdadaPruebaDengue: any;
  requierePruebaCovid1: any;
  fechaProgramadaPruebaCovid1: any;
  observacionPruebaCovid1: any;
  fueTomdadaPruebaCovid1: any;
  fechaTomaPruebaCovid1: any;
  tipoPruebaCovid1: any;
  resultadoFilmArrayPcr: any = 'NO PROCESADO';
  resultadoHemograma: any;
  /** Entrevista con el paciente */
  entrevistaPaciente: any;
  ipsTratante: any;
  ambitoAtencion: any;
  otroAmbito: any;
  tipoViviendaAislamiento: any;
  /** Seguimientos */
  /** Seguimientos */
  requierePrueba2: any;
  fechaTomaMuestra2: any;
  tipoMuestra2: any;
  resultadoMuestra2: any;
  personaReporta: any;
  casoFinalizado: any;
  siNoFinalizaProcedimientoASeguir: any;
  responsableSeguimiento: any;
  estadoAfectacion: any;
  /*
    personasQueHayaTenidoContacto: any[];
    seguimientos: any[];
    seguimientosReinfectado: any[];*/
  [x: string]: any;
  date3: Date;
  public status: string;
  displayDialog: boolean;
  selectedCovid: Covid;
  cars: Covid[];
  cols: any[];
  public responsable: string;
  newCar;
  car: Covid;
  casos: any[];
  constructor(private messageService: MessageService, public covidService: CovidService, private router: Router) { }
  ngOnInit(): void {
    this.cols = [
      { field: 'nombre', header: 'Nombre' },
      { field: 'apellido', header: 'Apellido' },
    ];
    this.casos = [{
      nombre: 'maicol',
      apellido: 'tascon'
    },
    {
      nombre: 'Julian ',
      apellido: 'Lenis'
    }];

    this.selectQuienReportaCaso = [
      {label: 'Seleccione quien reporta', value: null},
      {label: 'MIGRANTES', value: 'MIGRANTES'},
      {label: 'CONTACTO', value: 'CONTACTO'},
      {label: 'COMUNIDAD', value: 'COMUNIDAD'},
      {label: 'CRUE', value: 'CRUE'},
      {label: 'IPS O SIVIGILA', value: 'IPS O SIVIGILA'}
    ];

    this.selectTipoDocumento = [
      {label: 'Seleccione tipo de documento', value: null},
      {label: 'CEDULA DE CIUDADANIA', value: 'CEDULA DE CIUDADANIA'},
      {label: 'TARJETA DE IENTIDAD', value: 'TARJETA DE IENTIDAD'},
      {label: 'REGISTRO CIVIL', value: 'REGISTRO CIVIL'},
      {label: 'PASAPORTE', value: 'PASAPORTE'},
      {label: 'MENOR SIN IDENTIFICACION', value: 'MENOR SIN IDENTIFICACION'},
      {label: 'ADULTO SIN IDENTIFICACION', value: 'ADULTO SIN IDENTIFICACION'},
      {label: 'CERTIFICADO NACIDO VIVO', value: 'CERTIFICADO NACIDO VIVO'},
      {label: 'CARNET DIPLOMATICO', value: 'CARNET DIPLOMATICO'},
      {label: 'PERMISO ESPECIAL', value: 'PERMISO ESPECIAL'},
      {label: 'PERSONA SIN IDENTIFICACION', value: 'PERSONA SIN IDENTIFICACION'}
    ];

    this.selectAnoMesesDias = [
      {label: 'Seleccione el tiempo', value: null},
      {label: 'AÑOS', value: 'AÑOS'},
      {label: 'MESES', value: 'MESES'},
      {label: 'DIAS', value: 'DIAS'}
    ];

    this.selectSexo = [
      {label: 'Seleccione sexo', value: null},
      {label: 'MASCULINO', value: 'MASCULINO'},
      {label: 'FEMENINO', value: 'FEMENINO'}
    ];

    this.selectNacionalidad = [
      {label: 'Seleccione nacionalidad', value: null},
      {label: 'COLOMBIANO', value: 'MIGRANTES'},
      {label: 'OTRO', value: 'CONTACTO'}
    ];

    this.selectDepartamento = [
      {label: 'Seleccione departamento', value: null},
      {label: 'AMAZONAS', value: 'AMAZONAS'},
      {label: 'ANTIOQUIA', value: 'ANTIOQUIA'},
      {label: 'ARAUCA', value: 'ARAUCA'},
      {label: 'ATLÁNTICO', value: 'ATLÁNTICO'},
      {label: 'BOLÍVAR', value: 'BOLÍVAR'},
      {label: 'BOYACÁ', value: 'BOYACÁ'},
      {label: 'CALDAS', value: 'CALDAS'},
      {label: 'CAQUETÁ', value: 'CAQUETÁ'},
      {label: 'CASANARE', value: 'CASANARE'},
      {label: 'CAUCA', value: 'CAUCA'},
      {label: 'CESAR', value: 'CESAR'},
      {label: 'CHOCÓ', value: 'CHOCÓ'},
      {label: 'CÓRDOBA', value: 'CÓRDOBA'},
      {label: 'CUNDINAMARCA', value: 'CUNDINAMARCA'},
      {label: 'GUAINÍA', value: 'GUAINÍA'},
      {label: 'GUAVIARE', value: 'GUAVIARE'},
      {label: 'HUILA', value: 'HUILA'},
      {label: 'LA GUAJIRA', value: 'LA GUAJIRA'},
      {label: 'MAGDALENA', value: 'MAGDALENA'},
      {label: 'META', value: 'META'},
      {label: 'NARIÑO', value: 'NARIÑO'},
      {label: 'NORTE DE SANTANDER', value: 'NORTE DE SANTANDER'},
      {label: 'PUTUMAYO', value: 'PUTUMAYO'},
      {label: 'QUINDÍO', value: 'QUINDÍO'},
      {label: 'RISARALDA', value: 'RISARALDA'},
      {label: 'SAN ANDRÉS Y PROVIDENCIA', value: 'SAN ANDRÉS Y PROVIDENCIA'},
      {label: 'SANTANDER', value: 'SANTANDER'},
      {label: 'SUCRE', value: 'SUCRE'},
      {label: 'TOLIMA', value: 'TOLIMA'},
      {label: 'VALLE DEL CAUCA', value: 'VALLE DEL CAUCA'},
      {label: 'VAUPÉS', value: 'VAUPÉS'},
      {label: 'VICHADA', value: 'VICHADA'}
    ];

    this.selectBarrio = [
      {label: 'Seleccione barrio', value: null},
      {label: '20 DE JULIO', value: '20 DE JULIO'},
      {label: 'ACACIAS DE LA ITALIA', value: 'ACACIAS DE LA ITALIA'},
      {label: 'AGUACLARA', value: 'AGUACLARA'},
      {label: 'ALFONSO LOPEZ', value: 'ALFONSO LOPEZ'},
      {label: 'ALICANTO', value: 'ALICANTO'},
      {label: 'ALMENDROS DE LA ITALIA', value: 'ALMENDROS DE LA ITALIA'},
      {label: 'ALTAMIRA', value: 'ALTAMIRA'},
      {label: 'ALTOS DEL CASTILLO', value: 'ALTOS DEL CASTILLO'},
      {label: 'AMAIME', value: 'AMAIME'},
      {label: 'AYACUCHO LA BUITERRA', value: 'AYACUCHO LA BUITERRA'},
      {label: 'BARRANCAS', value: 'BARRANCAS'},
      {label: 'BARRIO NUEVO', value: 'BARRIO NUEVO'},
      {label: 'BERLIN', value: 'BERLIN'},
      {label: 'BIZERTA', value: 'BIZERTA'},
      {label: 'BOLO ALIZAL', value: 'BOLO ALIZAL'},
      {label: 'BOLO LA ITALIA', value: 'BOLO LA ITALIA'},
      {label: 'BOLO MADRE VIEJA O ARTONAL', value: 'BOLO MADRE VIEJA O ARTONAL'},
      {label: 'BOLO SAN ISIDRO', value: 'BOLO SAN ISIDRO'},
      {label: 'BOSQUES DE CENAPROV', value: 'BOSQUES DE CENAPROV'},
      {label: 'BOSQUES DE LA ITALIA', value: 'BOSQUES DE LA ITALIA'},
      {label: 'BOSQUES DEL EDEN', value: 'BOSQUES DEL EDEN'},
      {label: 'BOYACA', value: 'BOYACA'},
      {label: 'BRISAS DE LA ITALIA', value: 'BRISAS DE LA ITALIA'},
      {label: 'BRISAS DEL BOLO', value: 'BRISAS DEL BOLO'},
      {label: 'CAICELANDIA', value: 'CAICELANDIA'},
      {label: 'CALUCE', value: 'CALUCE'},
      {label: 'CAMILO TORRES', value: 'CAMILO TORRES'},
      {label: 'CAMPESTRE', value: 'CAMPESTRE'},
      {label: 'CAMPOS DE LA ITALIA', value: 'CAMPOS DE LA ITALIA'},
      {label: 'CAUCA SECO', value: 'CAUCA SECO'},
      {label: 'CENTRO', value: 'CENTRO'},
      {label: 'CENTRAL', value: 'CENTRAL'},
      {label: 'CEREZOS DE LA ITALIA', value: 'CEREZOS DE LA ITALIA'},
      {label: 'CHAPINERO', value: 'CHAPINERO'},
      {label: 'CIUDADELA DEL CAMPO', value: 'CIUDADELA DEL CAMPO'},
      {label: 'CIUDADELA PALMIRA', value: 'CIUDADELA PALMIRA'},
      {label: 'COLOMBIA', value: 'COLOMBIA'},
      {label: 'COLOMBINA', value: 'COLOMBINA'},
      {label: 'COMBIA', value: 'COMBIA'},
      {label: 'CONCORDIA', value: 'CONCORDIA'},
      {label: 'CONDADO DEL BOSQUE', value: 'CONDADO DEL BOSQUE'},
      {label: 'CONJUNTO RESIDENCIAL ENTRE PALMAS', value: 'CONJUNTO RESIDENCIAL ENTRE PALMAS'},
      {label: 'CORONADO', value: 'CORONADO'},
      {label: 'CRISTALES', value: 'CRISTALES'},
      {label: 'DANUBIO', value: 'DANUBIO'},
      {label: 'DEPARTAMENTAL', value: 'DEPARTAMENTAL'},
      {label: 'EL DORAL', value: 'EL DORAL'},
      {label: 'EL PORVENIR', value: 'EL PORVENIR'},
      {label: 'EL PRADO', value: 'EL PRADO'},
      {label: 'EL RETIRO', value: 'EL RETIRO'},
      {label: 'EL TREBOL', value: 'EL TREBOL'},
      {label: 'EMILIA', value: 'EMILIA'},
      {label: 'ESTONIA', value: 'ESTONIA'},
      {label: 'FATIMA', value: 'FATIMA'},
      {label: 'FRAY LUIS AMIGO', value: 'FRAY LUIS AMIGO'},
      {label: 'GUANABANAL', value: 'GUANABANAL'},
      {label: 'GUAYABAL', value: 'GUAYABAL'},
      {label: 'GUAYACANES DEL INGENIO', value: 'GUAYACANES DEL INGENIO'},
      {label: 'INDEPENDENCIA', value: 'INDEPENDENCIA'},
      {label: 'INDUSTRIAL', value: 'INDUSTRIAL'},
      {label: 'JORGE ELIECER GAITAN', value: 'JORGE ELIECER GAITAN'},
      {label: 'JOSE ANTONIO GALAN', value: 'JOSE ANTONIO GALAN'},
      {label: 'JOSE HERNAN ACEVEDO1', value: 'JOSE HERNAN ACEVEDO1'},
      {label: 'JUAN PABLO II', value: 'JUAN PABLO II'},
      {label: 'JUANCHITO', value: 'JUANCHITO'},
      {label: 'LA ACEQUIA', value: 'LA ACEQUIA'},
      {label: 'LA BENEDICTA', value: 'LA BENEDICTA'},
      {label: 'LA BOLSA ', value: 'LA BOLSA'},
      {label: 'LA BUITRERA', value: 'LA BUITRERA'},
      {label: 'LA COSECHA', value: 'LA COSECHA'},
      {label: 'LA DOLORES', value: 'LA DOLORES'},
      {label: 'LA ESPERANZA', value: 'LA ESPERANZA'},
      {label: 'LA HERRADURA', value: 'LA HERRADURA'},
      {label: 'LA NEVERA', value: 'LA NEVERA'},
      {label: 'LA PAMPA', value: 'LA PAMPA'},
      {label: 'LA PERSEVERANCIA', value: 'LA PERSEVERANCIA'},
      {label: 'LA QUISQUINA', value: 'LA QUISQUINA'},
      {label: 'LA TORRE', value: 'LA TORRE'},
      {label: 'LA TRINIDAD', value: 'LA TRINIDAD'},
      {label: 'LA VEGA', value: 'LA VEGA'},
      {label: 'LA ZAPATA', value: 'LA ZAPATA'},
      {label: 'LAS ACACIAS', value: 'LAS ACACIAS'},
      {label: 'LAS AMERICAS', value: 'LAS AMERICAS'},
      {label: 'LAS DELICIAS', value: 'LAS DELICIAS'},
      {label: 'LAS MERCEDES', value: 'LAS MERCEDES'},
      {label: 'LAS VICTORIAS', value: 'LAS VICTORIAS'},
      {label: 'LIBERTAD', value: 'LIBERTAD'},
      {label: 'LIBERTADORES', value: 'LIBERTADORES'},
      {label: 'LLANO GRANDE', value: 'LLANO GRANDE'},
      {label: 'LLANOS DE LA RIVERA', value: 'LLANOS DE LA RIVERA'},
      {label: 'LORETO', value: 'LORETO'},
      {label: 'LOS MANGOS', value: 'LOS MANGOS'},
      {label: 'LUIS CARLOS GALAN', value: 'LUIS CARLOS GALAN'},
      {label: 'MALIBU', value: 'MALIBU'},
      {label: 'MARIA CANO', value: 'MARIA CANO'},
      {label: 'MATAPALO', value: 'MATAPALO'},
      {label: 'MIRRIÑAO', value: 'MIRRIÑAO'},
      {label: 'MOLINOS DE COMFANDI', value: 'MOLINOS DE COMFANDI'},
      {label: 'MUNICIPAL', value: 'MUNICIPAL'},
      {label: 'OASIS DE LA ITALIA', value: 'OASIS DE LA ITALIA'},
      {label: 'OBANDO', value: 'OBANDO'},
      {label: 'OBRERO', value: 'OBRERO'},
      {label: 'OLIMPICO', value: 'OLIMPICO'},
      {label: 'ORLIDIA', value: 'ORLIDIA'},
      {label: 'OTRA POBLACION', value: 'OTRA POBLACION'},
      {label: 'PALMAS DE LA HACIENDA ', value: 'PALMAS DE LA HACIENDA'},
      {label: 'PALMASECA', value: 'PALMASECA'},
      {label: 'PALMERAS', value: 'PALMERAS'},
      {label: 'PALMERAS DE MARSELLA', value: 'PALMERAS DE MARSELLA'},
      {label: 'PALMERAS DE ORIENTE', value: 'PALMERAS DE ORIENTE'},
      {label: 'PARAISO DE LA ITALIA', value: 'PARAISO DE LA ITALIA'},
      {label: 'PARQUES DE LA ITALIA', value: 'PARQUES DE LA ITALIA'},
      {label: 'PASEO DE LA ITALIA', value: 'PASEO DE LA ITALIA'},
      {label: 'PETRUC', value: 'PETRUC'},
      {label: 'PILES', value: 'PILES'},
      {label: 'PLAZUELA DE LAS MERCEDES', value: 'PLAZUELA DE LAS MERCEDES'},
      {label: 'POBLADO DE COMFAUNION', value: 'POBLADO DE COMFAUNION'},
      {label: 'POMONA', value: 'POMONA'},
      {label: 'POPULAR MODELO', value: 'POPULAR MODELO'},
      {label: 'PORTAL DE PALERMO', value: 'PORTAL DE PALERMO'},
      {label: 'PORTALES DE NIZA', value: 'PORTALES DE NIZA'},
      {label: 'POTRERILLO', value: 'POTRERILLO'},
      {label: 'PRADOS DE ORIENTE', value: 'PRADOS DE ORIENTE'},
      {label: 'PRIMERO DE MAYO', value: 'PRIMERO DE MAYO'},
      {label: 'PROVIDENCIA', value: 'PROVIDENCIA'},
      {label: 'PROYECTO MUNICIPAL', value: 'PROYECTO MUNICIPAL'},
      {label: 'QUINTAS DE LA ITALIA', value: 'QUINTAS DE LA ITALIA'},
      {label: 'RECINTOS DE BARILOCHE', value: 'RECINTOS DE BARILOCHE'},
      {label: 'RECREO', value: 'RECREO'},
      {label: 'REMANSOS DE LA ITALIA', value: 'REMANSOS DE LA ITALIA'},
      {label: 'RESERVAS DE ZAMORANO', value: 'RESERVAS DE ZAMORANO'},
      {label: 'RIVERA ESCOBAR', value: 'RIVERA ESCOBAR'},
      {label: 'ROZO', value: 'ROZO'},
      {label: 'SAN CARLOS', value: 'SAN CARLOS'},
      {label: 'SAN CAYETANO', value: 'SAN CAYETANO'},
      {label: 'SAN JORGE', value: 'SAN JORGE'},
      {label: 'SAN JOSE', value: 'SAN JOSE'},
      {label: 'SAN PEDRO', value: 'SAN PEDRO'},
      {label: 'SANTA BARBARA', value: 'SANTA BARBARA'},
      {label: 'SANTA CLARA', value: 'SANTA CLARA'},
      {label: 'SANTA ISABEL', value: 'SANTA ISABEL'},
      {label: 'SANTA MARIA DEL PALMAR', value: 'SANTA MARIA DEL PALMAR'},
      {label: 'SANTA RITA OBRERO', value: 'SANTA RITA OBRERO'},
      {label: 'SAUCES', value: 'SAUCES'},
      {label: 'SESQUICENTENARIO', value: 'SESQUICENTENARIO'},
      {label: 'SIN INFORMACION', value: 'SIN INFORMACION'},
      {label: 'TABLONES', value: 'TABLONES'},
      {label: 'TENJO', value: 'TENJO'},
      {label: 'TIENDA NUEVA', value: 'TIENDA NUEVA'},
      {label: 'TOCHE', value: 'TOCHE'},
      {label: 'TRIUNFO', value: 'TRIUNFO'},
      {label: 'TULIPANES DE LA ITALIA', value: 'TULIPANES DE LA ITALIA'},
      {label: 'UNIDAD CAMINO BELEN', value: 'UNIDAD CAMINO BELEN'},
      {label: 'URB. ALAMEDA', value: 'URB. ALAMEDA'},
      {label: 'URB. ALICANTO', value: 'URB. ALICANTO'},
      {label: 'URB. ALMENARES DE LAS MERCEDES', value: 'URB. ALMENARES DE LAS MERCEDES'},
      {label: 'URB. ALTAMIRA', value: 'URB. ALTAMIRA'},
      {label: 'URB. ALTOS DEL BOSQUE', value: 'URB. ALTOS DEL BOSQUE'},
      {label: 'URB. BELTRAN', value: 'URB. BELTRAN'},
      {label: 'URB. BETANIA DE COMFANDI', value: 'URB. BETANIA DE COMFANDI'},
      {label: 'URB. BICENTENARIO', value: 'URB. BICENTENARIO'},
      {label: 'URB. BOSQUES DE MORELIA', value: 'URB. BOSQUES DE MORELIA'},
      {label: 'URB. BOSQUES DE VERSALLES', value: 'URB. BOSQUES DE VERSALLES'},
      {label: 'URB. BRISAS DEL NORTE', value: 'URB. BRISAS DEL NORTE'},
      {label: 'URB. BRISAS DEL ROMERO', value: 'URB. BRISAS DEL ROMERO'},
      {label: 'URB. CAMINOS DE LA HACIENDA', value: 'URB. CAMINOS DE LA HACIENDA'},
      {label: 'URB. CAMPESTRE PALMIRA', value: 'URB. CAMPESTRE PALMIRA'},
      {label: 'URB. CIUDADELA COMFAUNION', value: 'URB. CIUDADELA COMFAUNION'},
      {label: 'URB. EL BOSQUE', value: 'URB. EL BOSQUE'},
      {label: 'URB. EL CAIMITO', value: 'URB. EL CAIMITO'},
      {label: 'URB. EL JARDIN', value: 'URB. EL JARDIN'},
      {label: 'URB. EL PARAISO', value: 'URB. EL PARAISO'},
      {label: 'URB. EL POPULAR', value: 'URB. EL POPULAR'},
      {label: 'URB. EL SEMBRADOR', value: 'URB. EL SEMBRADOR'},
      {label: 'URB. GUAYACAN', value: 'URB. GUAYACAN'},
      {label: 'URB. GUAYACANES DEL PARQUE', value: 'URB. GUAYACANES DEL PARQUE'},
      {label: 'URB. GUAYACANES DEL SEMBRADOR', value: 'URB. GUAYACANES DEL SEMBRADOR'},
      {label: 'URB. GUAYACANES DEL SUR', value: 'URB. GUAYACANES DEL SUR'},
      {label: 'URB. HACIENDA BUENOS AIRES', value: 'URB. HACIENDA BUENOS AIRES'},
      {label: 'URB. HAROLD EDER', value: 'URB. HAROLD EDER'},
      {label: 'URB. HUGO VARELA', value: 'URB. HUGO VARELA'},
      {label: 'URB. IGNACIO TORRES', value: 'URB. IGNACIO TORRES'},
      {label: 'URB. JUAN PABLO II', value: 'URB. JUAN PABLO II'},
      {label: 'URB. LA CARBONERA', value: 'URB. LA CARBONERA'},
      {label: 'URB. LA COSECHA', value: 'URB. LA COSECHA'},
      {label: 'URB. LA PALMIRANA', value: 'URB. LA PALMIRANA'},
      {label: 'URB. LA PERSEVERANCIA', value: 'URB. LA PERSEVERANCIA'},
      {label: 'URB. LAS FLORES', value: 'URB. LAS FLORES'},
      {label: 'URB. LLANO GRANDE', value: 'URB. LLANO GRANDE'},
      {label: 'URB. LOS ROBLES', value: 'URB. LOS ROBLES'},
      {label: 'URB. MEJOR VIVIR/HERNAN ACEVEDO', value: 'URB. MEJOR VIVIR/HERNAN ACEVEDO'},
      {label: 'URB. MONTECLARO', value: 'URB. MONTECLARO'},
      {label: 'URB. PALMA REAL', value: 'URB. PALMA REAL'},
      {label: 'URB. PALO VERDE', value: 'URB. PALO VERDE'},
      {label: 'URB. PAPAYAL', value: 'URB. PAPAYAL'},
      {label: 'URB. PARQUES DE LA ITALIA', value: 'URB. PARQUES DE LA ITALIA'},
      {label: 'URB. PARQUES DE LLANO GRANDE', value: 'URB. PARQUES DE LLANO GRANDE'},
      {label: 'URB. PLAZA CAMPESTRE', value: 'URB. PLAZA CAMPESTRE'},
      {label: 'URB. POBLADO DE LOURDES', value: 'URB. POBLADO DE LOURDES'},
      {label: 'URB. PORTAL DE BUENOS AIRES', value: 'URB. PORTAL DE BUENOS AIRES'},
      {label: 'URB. PORTAL DE LAS PALMAS', value: 'URB. PORTAL DE LAS PALMAS'},
      {label: 'URB. PORTALES DE BARILOCHE', value: 'URB. PORTALES DE BARILOCHE'},
      {label: 'URB. PORTALES DEL RECREO', value: 'URB. PORTALES DEL RECREO'},
      {label: 'URB. PORTALES DEL SEMBRADOR', value: 'URB. PORTALES DEL SEMBRADOR'},
      {label: 'URB. QUINTAS DE LLANO GRANDE', value: 'URB. QUINTAS DE LLANO GRANDE'},
      {label: 'URB. QUINTAS DE ZAMORANO', value: 'URB. QUINTAS DE ZAMORANO'},
      {label: 'URB. RECINTOS DE BARILOCHE', value: 'URB. RECINTOS DE BARILOCHE'},
      {label: 'URB. RINCON DEL BOSQUE', value: 'URB. RINCON DEL BOSQUE'},
      {label: 'URB. SAMANES', value: 'URB. SAMANES'},
      {label: 'URB. SANTA ANA', value: 'URB. SANTA ANA'},
      {label: 'URB. SANTA TERESITA', value: 'URB. SANTA TERESITA'},
      {label: 'URB. SANTIAGO EDER', value: 'URB. SANTIAGO EDER'},
      {label: 'URB. SIETE  DE AGOSTO', value: 'URB. SIETE  DE AGOSTO'},
      {label: 'URB. SIMON BOLIVAR', value: 'URB. SIMON BOLIVAR'},
      {label: 'URB. VEINTE DE JULIO', value: 'URB. VEINTE DE JULIO'},
      {label: 'URB. VERSALLES', value: 'URB. VERSALLES'},
      {label: 'URB. VILLA CAIMITOS', value: 'URB. VILLA CAIMITOS'},
      {label: 'URB. VILLA DE CAÑA MIEL', value: 'URB. VILLA DE CAÑA MIEL'},
      {label: 'URB. VILLA DE LAS PALMAS', value: 'URB. VILLA DE LAS PALMAS'},
      {label: 'URB. VILLA DEL ROSARIO', value: 'URB. VILLA DEL ROSARIO'},
      {label: 'URB. VILLA DIANA', value: 'URB. VILLA DIANA'},
      {label: 'URB. VILLA FONTANA', value: 'URB. VILLA FONTANA'},
      {label: 'URB. VILLA LUZ', value: 'URB. VILLA LUZ'},
      {label: 'URIBE URIBE', value: 'URIBE URIBE'},
      {label: 'VEREDA SAN PABLO BOLO ALISAL ', value: 'VEREDA SAN PABLO BOLO ALISAL'},
      {label: 'VERSALLES', value: 'VERSALLES'},
      {label: 'VILLA CLAUDIA', value: 'VILLA CLAUDIA'},
      {label: 'VILLA DEL PALMAR', value: 'VILLA DEL PALMAR'},
      {label: 'VILLA FONTANA DE LA ITALIA', value: 'VILLA FONTANA DE LA ITALIA'},
      {label: 'VILLA TOSCANA', value: 'VILLA TOSCANA'},
      {label: 'ZAMORANO', value: 'ZAMORANO'}
    ];

    this.selectMunicipio = [
      {label: 'Seleccione municipio', value: null},
      {label: 'PALMIRA', value: 'PALMIRA'},
      {label: 'OTRO', value: 'OTRO'}
    ];
    this.selectTipoViviendaAislamiento = [
      {label: 'Seleccione tipo aislamiento', value: null},
      {label: 'HOTEL', value: 'HOTEL'},
      {label: 'CASA', value: 'CASA'},
      {label: 'FINCA', value: 'FINCA'},
      {label: 'ALBERGUE', value: 'ALBERGUE'},
      {label: 'EN HABITACION INDIVIDUAL', value: 'EN HABITACION INDIVIDUAL'}
    ];

    this.selectEps = [
      {label: 'A.F.P. BBVA HORIZONTE S.A.', value: 'A.F.P. BBVA HORIZONTE S.A.'},
      {label: 'A.F.P. CAJA NACIONAL DE PREVISIÓN', value: 'A.F.P. CAJA NACIONAL DE PREVISIÓN'},
      {label: 'A.F.P. COLFONDOS S.A.', value: 'A.F.P. COLFONDOS S.A.'},
      {label: 'A.F.P. I.S.S. RESERVAS I.V.S. PENSIONES', value: 'A.F.P. I.S.S. RESERVAS I.V.S. PENSIONES'},
      {label: 'A.F.P. PORVENIR S.A.', value: 'A.F.P. PORVENIR S.A.'},
      {label: 'A.F.P. PROTECCIÓN', value: 'A.F.P. PROTECCIÓN'},
      {label: 'A.F.P. SANTANDER', value: 'A.F.P. SANTANDER'},
      {label: 'A.F.P. SKANDIA S.A.', value: 'A.F.P. SKANDIA S.A.'},
      {label: 'ASMET SALUD', value: 'ASMET SALUD'},
      {label: 'ASOCIACION INDIGENA DEL CAUCA', value: 'ASOCIACION INDIGENA DEL CAUCA'},
      {label: 'ASOCIACIÓN MUTUAL SER EMPRESA SOLIDARIA DE SALUD ESS', value: 'ASOCIACIÓN MUTUAL SER EMPRESA SOLIDARIA DE SALUD ESS'},
      {label: 'CAFESALUD EPS', value: 'CAFESALUD EPS'},
      {label: 'CAPRECOM EPS', value: 'CAPRECOM EPS'},
      {label: 'COMFANDI EPS', value: 'COMFANDI EPS'},
      {label: 'COMFENALCO', value: 'COMFENALCO'},
      {label: 'COMFENALCO VALLE EPS', value: 'COMFENALCO VALLE EPS'},
      {label: 'COMPENSAR EPS', value: 'COMPENSAR EPS'},
      {label: 'COOMEVA EPS', value: 'COOMEVA EPS'},
      {label: 'COOPERATIVA DE SALUD ', value: 'COOPERATIVA DE SALUD'},
      {label: 'COSMITETCOMUNITARIA-COMPARTA', value: 'COSMITETCOMUNITARIA-COMPARTA'},
      {label: 'CRUZ BLANCA EPS', value: 'CRUZ BLANCA EPS'},
      {label: 'E.P.S. DIRECCIÓN DE SANIDAD POLICÍA NACIONAL', value: 'E.P.S. DIRECCIÓN DE SANIDAD POLICÍA NACIONAL'},
      {label: 'E.P.S. ECOPETROL S.A.', value: 'E.P.S. ECOPETROL S.A.'},
      {label: 'E.P.S. F. DE PRESTACIONES SOCIALES DEL MAGISTERIO', value: 'E.P.S. F. DE PRESTACIONES SOCIALES DEL MAGISTERIO'},
      {label: 'SOCIAL DE LOS FERROCARRILES NACIONALES DE COLOMBIA	', value: 'SOCIAL DE LOS FERROCARRILES NACIONALES DE COLOMBIA'},
      {label: 'EMSSANAR', value: 'EMSSANAR'},
      {label: 'FAMISANAR EPS', value: 'FAMISANAR EPS'},
      {label: 'HUMANA VIVIR EPS', value: 'HUMANA VIVIR EPS'},
      {label: 'ISS EPS', value: 'ISS EPS'},
      {label: 'MEDIMAS', value: 'MEDIMAS'},
      {label: 'NUEVA PROMOTORA DE SALUD - NUEVA EPS', value: 'NUEVA PROMOTORA DE SALUD - NUEVA EPS'},
      {label: 'PPNA', value: 'PPNA'},
      {label: 'RED SALUD ATENCIÓN HUMANA E.', value: 'RED SALUD ATENCIÓN HUMANA E.'},
      {label: 'SALUD COLMENA EPS', value: 'SALUD COLMENA EPS'},
      {label: 'SALUD COLPATRIA EPS', value: 'SALUD COLPATRIA EPS'},
      {label: 'SALUD TOTAL EPS', value: 'SALUD TOTAL EPS'},
      {label: 'SALUDCOLOMBIA EPS S. A.', value: 'SALUDCOLOMBIA EPS S. A.'},
      {label: 'SALUDCOOP EPS', value: 'SALUDCOOP EPS'},
      {label: 'SALUDVIDA EPS', value: 'SALUDVIDA EPS'},
      {label: 'SANIDAD MILITAR AL GRUPO DE EAPB', value: 'SANIDAD MILITAR AL GRUPO DE EAPB'},
      {label: 'SANITAS EPS', value: 'SANITAS EPS'},
      {label: 'SELVASALUD', value: 'SELVASALUD'},
      {label: 'SOLSALUD EPS', value: 'SOLSALUD EPS'},
      {label: 'SOS EPS', value: 'SOS EPS'},
      {label: 'SURA', value: 'SURA'},
      {label: 'SUSALUD EPS', value: 'SUSALUD EPS'}
    ];

    this.selectTipoAseguramiento = [
      {label: 'Seleccione tipo aislamiento', value: null},
      {label: 'CONTRIBUTIVO', value: 'CONTRIBUTIVO'},
      {label: 'ESPECIAL', value: 'ESPECIAL'},
      {label: 'NO ASEGURADO', value: 'NO ASEGURADO'},
      {label: 'SUBDIADO', value: 'SUBDIADO'}
    ];

    this.selectZonaResidencial = [
      {label: 'Seleccione tipo aislamiento', value: null},
      {label: 'URBANA', value: 'URBANA'},
      {label: 'RURAL', value: 'RURAL'},
    ];
    this.selectPruebaDengue = [
      {label: 'Seleccione tipo resultado', value: null},
      {label: 'POSITIVO', value: 'POSITIVO'},
      {label: 'NEGATIVO', value: 'NO PROCESADO'},
      {label: 'INADECUADO', value: 'INADECUADO'},
      {label: 'NO PROCESADO', value: 'NO PROCESADO'},
    ];

    this.covidService.findOccupation().subscribe(data => {
      // tslint:disable-next-line:no-string-literal
      this.selectOcupacion = data['ocupacion'];
      console.log(this.ocupacion);
    });

  }
  create() {
    this.router.navigate(['seguimientos']);
  }
  handleClick() {
    console.log('Guardo');
  }

  guardarCovid() {
    // tslint:disable-next-line: new-parens
    this.covid = new Covid;

    this.covid.quienReportaCaso = this.quienReportaCaso;
    /** Datos del paciente */
    this.covid.primerNombre = this.primerNombre;
    this.covid.segundoNombre = this.segundoNombre;
    this.covid.primerApellido = this.primerApellido;
    this.covid.segundoApellido = this.segundoApellido;
    this.covid.tipoDocumento = this.tipoDocumentipoAseguramientoto;
    this.covid.numeroDocumento = this.numeroDocumento;
    this.covid.fechaNacimiento = this.fechaNacimiento;
    this.covid.edad = this.edad;
    this.covid.anoMesesDias = this.anoMesesDias;
    this.covid.sexo = this.sexo;
    this.covid.etnia = this.etnia;
    this.covid.nacionalidad = this.nacionalidad;
    this.covid.otraNacionalidad = this.otraNacionalidad;
    this.covid.direccionDomicilio = this.direccionDomicilio;
    this.covid.barrio = this.barrio;
    this.covid.estrato = this.estrato;
    this.covid.comuna = this.comuna;
    this.covid.departamento = this.departamento;
    this.covid.municipio = this.municipio;
    this.covid.otroMunicipio = this.otroMunicipio;
    this.covid.eps = this.eps;
    this.covid.tipoAseguramiento = this.tipoAseguramiento;
    this.covid.zonaResidencial = this.zonaResidencial;
    this.covid.telefonosContacto1 = this.telefonosContacto1;
    this.covid.telefonosContacto2 = this.telefonosContacto2;
    this.covid.ocupacion = this.ocupacion;
    this.covid.otraOcupacion = this.otraOcupacion;
    /** Antecedentes de riesgo y exposicion */
    this.covid.sospechaDengue = this.sospechaDengue;
    this.covid.sospechaCovid = this.sospechaCovid;
    this.covid.deplazamiento14dias = this.deplazamiento14dias;
    this.covid.lugarDesplazamiento = this.lugarDesplazamiento;
    this.covid.paisesVisitados = this.paisesVisitados;
    this.covid.periodoEstadiaDias = this.periodoEstadiaDias;
    this.covid.boletoAvionRegreso = this.boletoAvionRegreso;
    this.covid.tuvoContactoCasoCovid = this.tuvoContactoCasoCovid;
    /** descripcionCasoConfirmado */
    this.covid.documentoCasoConfirmado = this.documentoCasoConfirmado;
    this.covid.nombreCasoConfirmado = this.nombreCasoConfirmado;
    this.covid.telefonoCasoConfirmado = this.telefonoCasoConfirmado;
    this.covid.lugarCasoConfirmado = this.lugarCasoConfirmado;
    /** Antecedentes clinicos y de hospitalizacion */
    this.covid.estadoActual = this.estadoActual;
    this.covid.definicionCaso = this.definicionCaso;
    this.covid.tipoCaso = this.tipoCaso;
    this.covid.fechaInicioSintomas = this.fechaInicioSintomas;
    this.covid.antecedentesClinicos = this.antecedentesClinicos;
    this.covid.institucionSalud = this.institucionSalud;
    /** Comorbilidades o factores de riesgo */
    this.covid.asma = this.asma;
    this.covid.enfermedadPulmonarCronica = this.enfermedadPulmonarCronica;
    this.covid.trastornoNeurologicoCronico = this.trastornoNeurologicoCronico;
    this.covid.inmunosupresion = this.inmunosupresion;
    this.covid.enfermedadRenalCronica = this.enfermedadRenalCronica;
    this.covid.enfermedadCardiaca = this.enfermedadCardiaca;
    this.covid.enfermedadHematologicaCronica = this.enfermedadHematologicaCronica;
    this.covid.hipertension = this.hipertension;
    this.covid.diabetes = this.diabetes;
    this.covid.obesidad = this.obesidad;
    this.covid.enfermedadHepaticaCronica = this.enfermedadHepaticaCronica;
    this.covid.embarazo = this.embarazo;
    this.covid.semanasGestacion = this.semanasGestacion;
    this.covid.tabaquismo = this.tabaquismo;
    this.covid.alcoholismo = this.alcoholismo;
    this.covid.trastornoReumatologico = this.trastornoReumatologico;
    this.covid.otroFactorRiesgo = this.otroFactorRiesgo;
    this.covid.cualFactorRiesgo = this.cualFactorRiesgo;
/** Datos laboratorio */
    this.covid.igmDengue = this.igmDengue;
    this.covid.requierePruebaDengue = this.requierePruebaDengue;
    this.covid.fechaProgramadaPuebaDengue = this.fechaProgramadaPuebaDengue;
    this.covid.fechaTomaPruebaDengue = this.fechaTomaPruebaDengue;
    this.covid.tipoPruebaDengue = this.tipoPruebaDengue;
    this.covid.resultadoPruebaDengue = this.resultadoPruebaDengue;
    this.covid.fueTomdadaPruebaDengue = this.fueTomdadaPruebaDengue;
    this.covid.requierePruebaCovid1 = this.requierePruebaCovid1;
    this.covid.fechaProgramadaPruebaCovid1 = this.fechaProgramadaPruebaCovid1;
    this.covid.observacionPruebaCovid1 = this.observacionPruebaCovid1;
    this.covid.fueTomdadaPruebaCovid1 = this.fueTomdadaPruebaCovid1;
    this.covid.fechaTomaPruebaCovid1 = this.fechaTomaPruebaCovid1;
    this.covid.tipoPruebaCovid1 = this.tipoPruebaCovid1;
    this.covid.resultadoFilmArrayPcr = this.resultadoFilmArrayPcr;
    this.covid.resultadoHemograma = this.resultadoHemograma;
    /** Entrevista con el paciente */ /** Entrevista con el paciente */
    this.covid.entrevistaPaciente = this.entrevistaPaciente;
    this.covid.ipsTratante = this.ipsTratante;
    this.covid.ambitoAtencion = this.ambitoAtencion;
    this.covid.otroAmbito = this.otroAmbito;
    this.covid.tipoViviendaAislamiento = this.tipoViviendaAislamiento;
    /** Seguimientos */ /** Seguimientos */
    /** Seguimientos */ /** Seguimientos */
    this.covid.requierePrueba2 = this.requierePrueba2;
    this.covid.fechaTomaMuestra2 = this.fechaTomaMuestra2;
    this.covid.tipoMuestra2 = this.tipoMuestra2;
    this.covid.resultadoMuestra2 = this.resultadoMuestra2;
    this.covid.personaReporta = this.personaReporta;
    this.covid.casoFinalizado = this.casoFinalizado;
    this.covid.siNoFinalizaProcedimientoASeguir = this.siNoFinalizaProcedimientoASeguir;
    this.covid.responsableSeguimiento = this.responsableSeguimiento;
    this.covid.estadoAfectacion = this.estadoAfectacion;

    if (this.covid) {
      this.covidService.create(this.covid).subscribe( data => {
      this.messages(data);
      }, error => {
        console.error('Error storing item', error);
      });
    }
  }

  messages(data) {
    if (data.message) {
      const message = data.message;
      this.showSuccess(message);
    }
  }

  showSuccess(message: any) {
    if (message === 'Emo creado con exito') {
      this.messageService.add({key: 'tl', severity: 'success', summary:
    'Success Message', detail: message});
      this.redirect();

    } else {
      this.messageService.add({key: 'tl', severity: 'error', summary:
      'Error Message', detail: 'No se pudo crear el caso de covid'});
    }
  }

  redirect() {
    setTimeout(() => {
      this.router.navigate(['/covid/']);
    }, 2000);
  }
}
