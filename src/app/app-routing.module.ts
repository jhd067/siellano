import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CovidComponent } from './components/covid/covid.component';
import {SeguimientosComponent} from './components/seguimientos/seguimientos.component';
import { LoginComponent } from './components/login/login.component';
import { RedireccionComponent } from './components/redireccion/redireccion.component';
import { AuthGuard } from './guards/auth.guard';
import { CovidcreateComponent } from './components/covidcreate/covidcreate.component';



const routes: Routes = [
  {path: 'redireccion/:token', component: RedireccionComponent},
  {path: 'login', component: LoginComponent},
  {path: 'covid', component: CovidComponent, canActivate: [AuthGuard]},
  {path: 'covidcreate', component: CovidcreateComponent, canActivate: [AuthGuard]},
  {path: 'seguimientos', component: SeguimientosComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
