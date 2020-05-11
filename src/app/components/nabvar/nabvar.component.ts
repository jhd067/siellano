import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import {ConfirmationService} from 'primeng/api';

@Component({
  selector: 'app-nabvar',
  templateUrl: './nabvar.component.html',
  styleUrls: ['./nabvar.component.css'],
  providers: [ConfirmationService]
})
export class NabvarComponent implements OnInit {
  userName: any;
  rol;
  constructor(public authService: AuthService, private router: Router, private confirmationService: ConfirmationService) {
    this.rol = this.authService.getCurrentUser().rol;
    this.userName = this.authService.getCurrentUser().nom;
  }

  ngOnInit(): void {
  }

  confirm() {
    this.confirmationService.confirm({
        message: '¿Esta seguro de cerrar la sesión?',
        accept: () => {
            this.onLogout();
        }
    });
  }

  onLogout() {
    this.authService.logoutUser();
    this.router.navigate(['/login']);
    location.reload();

  }
}
