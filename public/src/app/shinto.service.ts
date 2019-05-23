import { Injectable } from '@angular/core';
import { LedgerObj } from './ledger-obj';

@Injectable({
  providedIn: 'root'
})
export class ShintoService {
  ledger: LedgerObj[] = [];
  currentShintoVal = 1.00;
  shintoBalance = 0;

  constructor() { }

  shareLedger(): LedgerObj[] {
    return this.ledger;
  }

  addToLedger(obj: LedgerObj): void {
    const rand = Math.floor(Math.random() * (9999 - 0));
    obj.id = rand;
    this.ledger.push(obj);
  }

  shareShintoValue(): number {
    return this.currentShintoVal;
  }

  changeShintoValue(num: number): void {
    this.currentShintoVal += num;
  }

  changeShintoBalance(num: number): void {
    this.shintoBalance += num;
  }

  shareShintoBalance(): number {
    return this.shintoBalance;
  }
}
