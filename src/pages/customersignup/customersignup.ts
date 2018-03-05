import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , LoadingController, ToastController} from 'ionic-angular';
import { HomePage } from '../home/home';
import { UsersserviceProvider } from '../../providers/usersservice/usersservice';


@IonicPage()
@Component({
  selector: 'page-customersignup',
  templateUrl: 'customersignup.html', 
   providers: [UsersserviceProvider]
})

export class CustomersignupPage {
				
				 public name : string;
  				 public email : string;
 				 public phone : any;
 				 public age : any;
 				 public gander : any;
 				 public password : any;
			

  constructor(public navCtrl: NavController, public navParams: NavParams, public usersserviceProvider : UsersserviceProvider, 
    public toastCtrl: ToastController, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomersignupPage');
  }

  signUpCustomer(){


  		var account ={


  		name:this.name || '',
  		email:this.email ,
  		phone:this.phone || '',
  		age:this.age || '',
  		gander:this.gander || '',
  		password:this.password || '',
  		
  		};
  		var that = this;

  		var loader = this.loadingCtrl.create({
      content: "Please wait...",
      
    });
    loader.present();


  	this.usersserviceProvider.signupUserService(account).then(authData => {
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
