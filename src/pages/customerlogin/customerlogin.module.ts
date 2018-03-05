import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerloginPage } from './customerlogin';

@NgModule({
  declarations: [
    CustomerloginPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomerloginPage),
  ],
})
export class CustomerloginPageModule {}
