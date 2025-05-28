import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VitorPadrinhoService {

  private apiUrl = environment.apiUrl;



  constructor(private http: HttpClient) { }

  getGames(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getDados(){
    return this.http.get(this.apiUrl);
  }
}
