import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import CoinData from '../models/coin.model';
import { CoinService } from '../services/coin.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import Transaction from '../models/transaction.model';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  coins!: CoinData[];
  errorMessage: string = "";

  constructor(public coinservice: CoinService,
    private location: Location,
    public transactionservice: TransactionService) { }


  ngOnInit(): void {
    this.readCoin();
  }

  readCoin(): void {
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

  createTransaction(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const transactionData: Transaction = form.value;

    this.transactionservice.createTransaction(transactionData)
      .subscribe(data => {
        this.errorMessage = "";
        this.location.back();
      },
        error => { this.errorMessage = error.error.msg; });
  }
}
