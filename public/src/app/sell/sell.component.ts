import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShintoService } from '../shinto.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
  shintoValue: number;
  shintoBalance: number;
  shinto: any;

  constructor(private _route: ActivatedRoute, private _router: Router, private _shintoService: ShintoService) { }

  ngOnInit() {
    this.shintoValue = this._shintoService.shareShintoValue();
    this.shintoBalance = this._shintoService.shareShintoBalance();
    this.shinto = { sellQty: 0 };
  }

  onSubmit() {
    if(this.shinto.sellQty <= this.shintoBalance) {
      this._shintoService.changeShintoBalance(-this.shinto.sellQty);
      this._shintoService.changeShintoValue(-this.shinto.sellQty);
      this.shintoBalance = this._shintoService.shareShintoBalance();
      this.shintoValue = this._shintoService.shareShintoValue();
      this._shintoService.addToLedger({ action: 'Sold', amount: this.shinto.sellQty, value: this.shintoBalance, id: null });
      this.shinto.sellQty = 0;
    }
  }
}

// Every time you sell a ShintoCoin, decrease the value of ShintoCoin by 1. You can only sell a ShintoCoin if you have a valance of 1 or more, do not allow sale of ShintoCoins for invalid amounts.
