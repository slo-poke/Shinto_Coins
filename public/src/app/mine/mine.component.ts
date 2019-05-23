import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShintoService } from '../shinto.service';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {
  questions: string[] = [];
  answers: number[] = [];
  shinto: any;
  shintoBalance: number;

// tslint:disable-next-line: variable-name
  constructor(private _route: ActivatedRoute, private _router: Router, private _shintoService: ShintoService) { }

  ngOnInit() {
    this.questions.push('What is the 7th Fibonacci sequence number?');
    this.answers.push(8);
    this.shinto = { answer: null }
  }

  onSubmit(): void {
    if(this.shinto.answer === this.answers[0]) {
      // answer is correct, increase val of ShintoCoin by 1 and increase user balance by 1
      this._shintoService.changeShintoValue(1);
      this._shintoService.changeShintoBalance(1);
      this.shintoBalance = this._shintoService.shareShintoBalance();
      this.shinto = { answer: null };
      this._shintoService.addToLedger({ action: 'mined', amount: 1, value: this.shintoBalance, id: null });
    }
  }
}

// Every time you answer the question correctly (mine a ShintoCoin), increase the value of ShintoCoin by 1 and store the new personal balance of ShintoCoins in the Service.
