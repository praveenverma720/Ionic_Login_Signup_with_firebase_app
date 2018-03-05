import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , LoadingController, ToastController} from 'ionic-angular';
import * as firebase from 'firebase';
import { HomePage } from '../home/home';
import { UsersserviceProvider } from '../../providers/usersservice/usersservice';



@IonicPage()
@Component({
  selector: 'page-customerlogin',
  templateUrl: 'customerlogin.html',
    providers: [UsersserviceProvider]

})
export class CustomerloginPage {
	
	public email: string;
  	public password: string;

  constructor(public usersService : UsersserviceProvider,public loadingCtrl: LoadingController, 
    public toastCtrl: ToastController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerloginPage');
  }

  CustomerLogin(){

  	    var that = this;
    
    var loader = this.loadingCtrl.create({
          content: "Please wait..."
        });
        loader.present();

        
        this.usersService.loginUserService(this.email, this.password).then(authData => {
          //successful
          loader.dismiss();
          that.navCtrl.setRoot(HomePage);
    
        }, error => {
    loader.dismiss();
         // Unable to log in
          let toast = this.toastCtrl.create({
            message: error,
            duration: 3000,
            position: 'top'
          });
          toast.present();
    
    that.password = ""//empty the password field
    
        });

  }

}
