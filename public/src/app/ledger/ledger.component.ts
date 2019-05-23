import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShintoService } from '../shinto.service';
import { headersToString } from 'selenium-webdriver/http';
import { LedgerObj } from '../ledger-obj';

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css']
})
export class LedgerComponent implements OnInit {
  ledger: LedgerObj[];

// tslint:disable-next-line: variable-name
  constructor(private _route: ActivatedRoute, private _router: Router, private _shintoService: ShintoService) { }

  ngOnInit() {
    this.getLedger();
  }

  getLedger(): void {
    this.ledger = this._shintoService.shareLedger();
  }

}

/* This view should retrieve all transactions and present them here. 

  ShintoCoin transactions should be saved in the Service as objects, give each new transaction a unique id, you can do this simply by ranodmizing a number from 1 - 9999 and setting that as the transaction's id.

  Transaction [Details] button should redirect us to that specific transaction's details page, showing us the details of the transaction. e.g. /transaction/1 may be the route for the first randomized saved transaction. */
