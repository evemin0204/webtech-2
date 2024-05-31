import { Component, OnInit, Input } from '@angular/core';
import Wallet from '../models/wallet.model';
import { WalletService } from '../services/wallet.service';


@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {
  @Input() walletData!: Wallet[];


  constructor(public walletservice: WalletService) { }

  ngOnInit(): void {

  }

  getPnl(walletItem: Wallet): number {
    return Math.abs(walletItem.price - walletItem.invested) * 100 / walletItem.invested;
  }

  isEarn(walletItem: Wallet): boolean {
    return (walletItem.price - walletItem.invested) > 0
  }
}
