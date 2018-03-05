import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LogintabPage } from '../logintab/logintab';
import { SignuptabPage } from '../signuptab/signuptab';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }


  Login(){

  		this.navCtrl.push(LogintabPage);
  }

  SignUp(){

  			this.navCtrl.push(SignuptabPage);
  }
}
