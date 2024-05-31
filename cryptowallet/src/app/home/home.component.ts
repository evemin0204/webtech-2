import { Component, OnInit } from '@angular/core';
import Wallet from '../home/models/wallet.model';
import { WalletService } from '../home/services/wallet.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  walletData!: Wallet[];

  constructor(public walletservice: WalletService) { }

  ngOnInit(): void {
    this.readTransaction();
  }

  readTransaction(): void {
    this.walletservice.getWallet().subscribe(
      (
        response: Wallet[]) => {
        this.walletData = response;
      },
      error => console.log(error)
    );
  }

}
