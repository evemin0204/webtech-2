import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from "../../../environments/environment";
import Transaction from '../models/transaction.model'

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }

  createTransaction(transactionData: Transaction): Observable<any> {
    return this.http.post(`${environment.apiUrl}/api/transactions/`, transactionData)
  }

  getTransaction(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${environment.apiUrl}/api/transactions`);
  }

  deleteOne(id: string): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/api/transactions/${id}`);
  }

  updateOne(id: string, transactionData: Transaction): Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}/api/transactions/${id}`, transactionData);
  }

  getOne(id: string): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/api/transactions/${id}`);
  }

}
