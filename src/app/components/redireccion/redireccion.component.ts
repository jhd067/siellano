import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-redireccion',
  templateUrl: './redireccion.component.html',
  styleUrls: ['./redireccion.component.css']
})
export class RedireccionComponent implements OnInit {
  token;

  // tslint:disable-next-line:variable-name
  constructor(public authServices: AuthService, private router: Router, private _route: ActivatedRoute) {
    this.token = this._route.snapshot.paramMap.get('token');
   }

  ngOnInit(): void {
    this.authServices.loginModules(this.token).subscribe(datos => {
      console.log(datos);
      if (datos.estado === 'activo') {
        console.log(datos);
        // tslint:disable-next-line:new-parens
        this.authServices.setUser(datos);
        const token = datos._id;
        this.authServices.setToken(token);
        setTimeout( () => {
          this.router.navigate(['/covid']);
        }, 3000);
      } else {
        this.router.navigate(['/login']);
      }

    });
  }

}
