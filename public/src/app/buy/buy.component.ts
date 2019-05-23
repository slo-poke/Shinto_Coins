import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShintoService } from '../shinto.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  shintoValue: number;
  shintoBalance: number;
  shinto: any;

  constructor(private _route: ActivatedRoute, private _router: Router, private _shintoService: ShintoService) { }

  ngOnInit() {
    this.shintoValue = this._shintoService.shareShintoValue();
    this.shintoBalance = this._shintoService.shareShintoBalance();
    this.shinto = { purchaseQty: 0 };
  }

  onSubmit() {
    if(this.shinto.purchaseQty > 0) {
      this._shintoService.changeShintoBalance(this.shinto.purchaseQty);
      this._shintoService.changeShintoValue(this.shinto.purchaseQty);
      this.shintoBalance = this._shintoService.shareShintoBalance();
      this.shintoValue = this._shintoService.shareShintoValue();
      this._shintoService.addToLedger({ action: 'Bought', amount: this.shinto.purchaseQty, value: this.shintoBalance, id: null });
      this.shinto.purchaseQty = 0;
    }
  }
}

// Any time you purchase a ShintoCoin, increase the value of ShintoCoin by 1.