import { Component, OnInit } from '@angular/core';
import {Validators, FormControl, FormGroup, FormBuilder} from '@angular/forms';
import {MessageService} from 'primeng/api';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {

  user;
  password;
  form: FormGroup;
  anio;
  showPassword: boolean;

  public isError = false;
  public authError;
  constructor(private fb: FormBuilder,
              private messageService: MessageService,
              public authService: AuthService,
              private router: Router
              ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      user: new FormControl('', Validators.required),
      password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
    });
    this.anio = new Date().getFullYear();
    if (this.authService.getToken()) {
      this.router.navigate(['/covid']);

    }
  }

  onLogin() {


    this.authService.login(this.user, this.password).subscribe(
      datos => {
        console.log(datos);
        if (datos.estado === 'activo') {
          console.log(datos);
          // tslint:disable-next-line:new-parens
          this.authService.setUser(datos);
          const token = datos._id;
          this.authService.setToken(token);
          this.router.navigate(['/covid']);
       // location.reload();
          this.isError = false;


        } else {
          this.messageService.add({key: 'tc', severity: 'error', summary:
          'Error Message', detail: 'El usuario esta inactivo por favor comuniquese con el Administrador'});

        }


      },
      error => this.onIsError()
    );
    if (!this.authService.getToken()) {
      this.showError();
    }

  }

  onIsError(): void {
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 4000);
  }

  showError() {
    this.messageService.add({key: 'tc', severity: 'error', summary:
    'Error Message', detail: 'Usuario o contraseña invalida'});
  }


}
