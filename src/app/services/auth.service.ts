import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auth } from '../../app/app.configuracion';
import { Observable } from 'rxjs';
import { isNullOrUndefined } from 'util';
import { Router } from '@angular/router';
import { User } from '../models/users';
import { Data } from '../models/data';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http: HttpClient,  private router: Router) { }

  login(user, password): Observable<User> {
    console.log(user + ' ' + password);
    return this.http.post<User>(`${Auth.URLC}users/login/`, {user, password });
  }

  find(): Observable<User> {
    const secret = 'SiellanoUser';
    return this.http.post<User>(`${Auth.URLC}users`, {secret} );
  }

  findByUserId(id): Observable<User>  {
   return this.http.get<User>(`${Auth.URLC}users/findByUserId/` + id );
  }

  loginModules(token): Observable<User>  {
    return this.http.post<User>(`${Auth.URLC}users/loginModules/`, {token} );
   }


  findId(id) {
    return this.http.get(`${Auth.URLC}users/` + id);
  }

  findIduser(id): Observable<User> {
    return this.http.get<User>(`${Auth.URLC}users/` + id);
  }

  setUser(user: User): void {
    // tslint:disable-next-line:variable-name
    const user_string = JSON.stringify(user);
    localStorage.setItem('currentUser', user_string);

  }

  setToken(token): void {
    localStorage.setItem('accessToken', token);
  }

  getToken() {
    return localStorage.getItem('accessToken');
  }

  getCurrentUser(): User {
    // tslint:disable-next-line:variable-name
    const user_string = localStorage.getItem('currentUser');
    if (!isNullOrUndefined(user_string)) {
      const user: User = JSON.parse(user_string);
      return user;
    } else {
      return null;
    }
  }

  logoutUser() {
    // tslint:disable-next-line:new-parens
   // return this.http.post(`${Configuracion.URL}users/sessionUpdate/` , {session});
    localStorage.removeItem('accessToken');
    localStorage.removeItem('currentUser');
    localStorage.removeItem('currentIp');
    localStorage.removeItem('currentOS');
    localStorage.removeItem('currentBrowser');
    // return this.http.post<UserInterface>(url_api, { headers: this.headers });
    // const url_api = `http://localhost:3000/api/Users/logout?access_token=${accessToken}`;
  }

}
