import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Vortrag} from "../models/Vortrag";

@Injectable({
  providedIn: 'root'
})
export class VortragService {

  constructor(private http: HttpClient) { }

  public getVortraege(): Observable<Vortrag[]> {
    return this.http.get<Vortrag[]>('http://localhost:8080/api/vortraege')
  }
}
