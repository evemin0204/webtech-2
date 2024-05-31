import { Component, OnInit } from '@angular/core';
import Transaction from '../models/transaction.model';
import { TransactionService } from '../services/transaction.service';
import { Location } from '@angular/common';
import CoinData from '../models/coin.model';
import { CoinService } from '../services/coin.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editform',
  templateUrl: './editform.component.html',
  styleUrls: ['./editform.component.css']
})
export class EditformComponent implements OnInit {

  coins!: CoinData[];
  errorMessage: string = "";
  transaction!: Transaction;


  constructor(public coinservice: CoinService,
    private location: Location,
    public route: ActivatedRoute,
    public transactionservice: TransactionService) {

  }

  ngOnInit(): void {
    this.getCoins();
    const transactionId = this.route.snapshot.params['id'];
    this.getTransaction(transactionId);
  }

  getCoins(): void {
    this.coinservice.getCoinName().subscribe(
      (
        response: CoinData[]) => {
        this.coins = response;
      },
      error => console.log(error)
    );
  }

  cancel(): void {
    this.location.back();
  }

  updateTransaction() {
    this.transactionservice.updateOne(this.transaction._id, this.transaction)
      .subscribe(data => {
        this.errorMessage = "";
        this.location.back();
      },
        error => { this.errorMessage = error.error.msg; });
  }

  getTransaction(id: string) {
    this.transactionservice.getOne(id).subscribe(
      (
        response: Transaction) => {
        this.transaction = response;
      },
      error => console.log(error)
    );
  }

}
