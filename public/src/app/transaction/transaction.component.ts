import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ShintoService } from '../shinto.service';
import { LedgerObj } from '../ledger-obj';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  ledger: LedgerObj[];
  record: LedgerObj;
  recordID: number;
  recordIndex: number;

  constructor(private _route: ActivatedRoute, private _router: Router, private _shintoService: ShintoService) { 
    this.getLedger();
    this._route.params.subscribe((params: Params) => {
      this.recordID = Number(params.id);
      console.log(this.recordID);
      this.record = this.findRecordById();
    });
  }

  ngOnInit() {
  }

  getLedger(): void {
    this.ledger = this._shintoService.shareLedger();
  }

  findRecordById(): LedgerObj {
    for(const record in this.ledger) {
      if(this.ledger[record].id === this.recordID) {
        this.recordIndex = Number(record) + 1;
        return this.ledger[record];
      }
    }
    console.log('returning null');
    return null;
  }

}

// ShintoCoin transactions should be saved in the Service as objects. This view should retrieve all transactions and present them here.
