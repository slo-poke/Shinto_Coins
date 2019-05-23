import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {
  // numbers: number[] = [];

  constructor(private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id']);
    });
  }

  // constructor(private _shintoService: ShintoService) { }

  // ngOnInit() {
  // }

  // getNumbers() {
  //   this.numbers = this._shintoService.shareNumbers();
  // }

  // addToNumbers(num) {
  //   this._shintoService.addToNumbers(num);
  // }

}
