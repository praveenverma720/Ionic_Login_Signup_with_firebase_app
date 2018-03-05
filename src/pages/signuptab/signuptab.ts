import { Component } from '@angular/core';

import { CustomersignupPage } from '../customersignup/customersignup';
import { StudentsignupPage } from '../studentsignup/studentsignup';

@Component({
  selector: 'page-signuptab',
  templateUrl: 'signuptab.html',
})
export class SignuptabPage {

  tab1Root = CustomersignupPage;
  tab2Root = StudentsignupPage;

  constructor() {

  }

  

}
