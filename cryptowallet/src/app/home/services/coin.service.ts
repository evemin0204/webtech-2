import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import CoinData from "../models/coin.model";
import { Observable } from 'rxjs';
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CoinService {

  constructor(private http: HttpClient) { }

  getCoinName(): Observable<CoinData[]> {
    return this.http.get<CoinData[]>(`${environment.apiUrl}/api/coins`);
  }
}
