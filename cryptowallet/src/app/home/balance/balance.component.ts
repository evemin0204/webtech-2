import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import Wallet from '../models/wallet.model';
import { WalletService } from '../services/wallet.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {
  @Input() walletData!: Wallet[];
  totalInvestment: number = 0;
  totalBalance: number = 0;
  totalPnl: number = 0;
  isEarn: boolean = false;

  constructor(public walletservice: WalletService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.walletData) {
      this.calculateTotal(this.walletData);
    }
  }

  calculateTotal(walletData: Wallet[]): void {
    this.totalInvestment = walletData.reduce((sum, wallet) => sum + wallet.invested, 0);
    this.totalBalance = walletData.reduce((sum, wallet) => sum + wallet.price, 0);
    this.totalPnl = Math.abs(this.totalBalance - this.totalInvestment) * 100 / this.totalInvestment;
    this.isEarn = (this.totalBalance - this.totalInvestment) > 0;
  }

}
