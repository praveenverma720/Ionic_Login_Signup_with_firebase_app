import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , LoadingController, ToastController} from 'ionic-angular';
import { HomePage } from '../home/home';
import { StudentserviceProvider } from '../../providers/studentservice/studentservice';


@IonicPage()
@Component({
  selector: 'page-studentsignup',
  templateUrl: 'studentsignup.html',
  providers: [StudentserviceProvider]
})

export class StudentsignupPage {
			
			public name : string;
  				 public email : string;
 				 public phone : any;
 				 public age : any;
 				 public gander : any;
 				 public password : any;

  constructor(public navCtrl: NavController, public navParams: NavParams ,public studentserviceProvider : StudentserviceProvider, 
    public toastCtrl: ToastController, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentsignupPage');
  }

  studentSignup(){


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


    this.studentserviceProvider.studentSignupService(account).then(authData => {
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
