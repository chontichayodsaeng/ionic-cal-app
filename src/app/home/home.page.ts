import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private http :HttpClient) {
    this.calculate();
  }

  async calculate() {

    let response = await<any>this.http.get('https://ionicframework.com/docs/').toPromise();
    console.log(response);
    this.calculate = response.results;
  }
}
