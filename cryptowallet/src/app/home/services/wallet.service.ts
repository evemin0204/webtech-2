import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from "../../../environments/environment";
import Wallet from '../models/wallet.model'

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  constructor(private http: HttpClient) { }

  getWallet(): Observable<Wallet[]> {
    return this.http.get<Wallet[]>(`${environment.apiUrl}/api/wallet`);
  }
}
