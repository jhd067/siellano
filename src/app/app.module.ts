import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {AccordionModule} from 'primeng/accordion';     // accordion and accordion tab
import { AppComponent } from './app.component';
import { CovidComponent } from './components/covid/covid.component';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import { AppRoutingModule } from './app-routing.module';
import {CalendarModule} from 'primeng/calendar';
import {TabViewModule} from 'primeng/tabview';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {ButtonModule} from 'primeng/button';
import {KeyFilterModule} from 'primeng/keyfilter';
import {TableModule} from 'primeng/table';
import { CovidService } from './services/covid.service';
import { HttpClientModule } from '@angular/common/http';
import { NabvarComponent } from './components/nabvar/nabvar.component';
import { SeguimientosComponent } from './components/seguimientos/seguimientos.component';
import { LoginComponent } from './components/login/login.component';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {PanelModule} from 'primeng/panel';
import {ToastModule} from 'primeng/toast';
import { RedireccionComponent } from './components/redireccion/redireccion.component';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { FooterComponent } from './components/footer/footer.component';
import { ContextMenuModule } from 'primeng/contextmenu';
import { CovidcreateComponent } from './components/covidcreate/covidcreate.component';






@NgModule({
  declarations: [
    AppComponent,
    CovidComponent,
    CovidcreateComponent,
    NabvarComponent,
    SeguimientosComponent,
    LoginComponent,
    RedireccionComponent,
    FooterComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    DropdownModule,
    AppRoutingModule,
    FormsModule,
    CalendarModule,
    TabViewModule,
    InputTextareaModule,
    ButtonModule,
    TableModule,
    HttpClientModule,
    KeyFilterModule,
    MessagesModule,
    MessageModule,
    ReactiveFormsModule,
    PanelModule,
    ToastModule,
    InputTextModule,
    AccordionModule,
    ProgressSpinnerModule,
    ConfirmDialogModule,
    ContextMenuModule



  ],
  providers: [CovidService],
  bootstrap: [AppComponent]
})
export class AppModule { }
