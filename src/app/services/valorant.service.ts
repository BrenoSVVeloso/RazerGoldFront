import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValorantService {

  private apiUrl = "http://localhost:8080/br/menu/catalog/valorant"



  constructor(private http: HttpClient) { }

  getGames(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getDados(){
    return this.http.get(this.apiUrl);
  }
}
