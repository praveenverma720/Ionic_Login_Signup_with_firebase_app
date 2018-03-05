import { Component } from '@angular/core';

import { CustomerloginPage } from '../customerlogin/customerlogin';
import { StudentloginPage }  from '../studentlogin/studentlogin';


@Component({
  selector: 'page-logintab',
  templateUrl: 'logintab.html',
})
export class LogintabPage {

    tab1Root = CustomerloginPage;
  tab2Root = StudentloginPage;

  constructor() {

  }


}
