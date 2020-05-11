
import { Config } from '../app.configuracion';
import { Covid } from '../models/covid';
import { Data } from '../models/data';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Label } from '../models/labels';

@Injectable()
export class CovidService {

    constructor(
        // tslint:disable-next-line:variable-name
        private _http: HttpClient
    ) {}

    find(): Observable<Covid> {
        const post = 'SiellanoCovid';
        return this._http.get<Covid>(`${Config.URL}covid/find/`);
    }

    findOccupation(): Observable<Label> {
        return this._http.get<Label>(`../assets/databases/ocupaciones.json`);
    }

    create(data): Observable<Data> {
        console.log(data);
        return this._http.post<Data>(`${Config.URL}casos/save/`, { data });
    }
}
