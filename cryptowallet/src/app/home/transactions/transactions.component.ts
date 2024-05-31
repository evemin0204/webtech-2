import { Component, OnInit } from '@angular/core';
import Transaction from '../models/transaction.model';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  transactions!: Transaction[];
  deleted = false;
  constructor(public transactionservice: TransactionService, private router: Router) { }

  ngOnInit(): void {
    this.readTransaction();
  }

  readTransaction(): void {
    this.transactionservice.getTransaction().subscribe(
      (
        response: Transaction[]) => {
        this.transactions = response;
        return this.transactions;
      },
      error => console.error(error)
    );
  }

  deleteTransaction(id: string): void {
    this.transactionservice.deleteOne(id).subscribe(
      (response: any) => {
        window.location.reload();
      },
      error => console.log(error)
    );
  }

  reload(deleted: boolean) {
    this.deleted = deleted;
    this.readTransaction();
    this.router.navigateByUrl('/');
  }

}
