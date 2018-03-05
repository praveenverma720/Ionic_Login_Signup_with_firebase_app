import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , LoadingController, ToastController} from 'ionic-angular';
import { HomePage } from '../home/home';
import { StudentserviceProvider } from '../../providers/studentservice/studentservice';

@IonicPage()
@Component({
  selector: 'page-studentlogin',
  templateUrl: 'studentlogin.html',
  providers: [StudentserviceProvider]
})
export class StudentloginPage {

	public email: string;
  	public password: string;

  constructor(public studentservice : StudentserviceProvider,public loadingCtrl: LoadingController,public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentloginPage');
  }


   StudentLogin(){

  	    var that = this;
    
    var loader = this.loadingCtrl.create({
          content: "Please wait..."
        });
        loader.present();

        
        this.studentservice.studentLoginService(this.email, this.password).then(authData => {
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
