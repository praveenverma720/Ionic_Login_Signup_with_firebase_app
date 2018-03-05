import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

//firebase

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import * as firebase from 'firebase';
//pages

import { MyApp }              from './app.component';
import { HomePage }           from '../pages/home/home';
import { SignuptabPage }      from '../pages/signuptab/signuptab';
import { LogintabPage }       from '../pages/logintab/logintab';
import { CustomersignupPage } from '../pages/customersignup/customersignup';
import { StudentsignupPage }  from '../pages/studentsignup/studentsignup';
import { CustomerloginPage }  from '../pages/customerlogin/customerlogin';
import { StudentloginPage }   from '../pages/studentlogin/studentlogin';
import { UsersserviceProvider } from '../providers/usersservice/usersservice';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { StudentserviceProvider } from '../providers/studentservice/studentservice';

//firebase credaional

const config = {
    apiKey: "AIzaSyBULHbBsNahEIrgje_CTtAqDtc5Iz7vl6w",
    authDomain: "tingting-263c9.firebaseapp.com",
    databaseURL: "https://tingting-263c9.firebaseio.com",
    projectId: "tingting-263c9",
    storageBucket: "tingting-263c9.appspot.com",
    messagingSenderId: "814914916467"
  };firebase.initializeApp(config);


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignuptabPage,
    LogintabPage,
    CustomersignupPage,
    StudentsignupPage,
    CustomerloginPage,
    StudentloginPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireAuthModule,
    AngularFireModule.initializeApp(config)
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignuptabPage,
    LogintabPage,
    CustomersignupPage,
    StudentsignupPage,
    CustomerloginPage,
    StudentloginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsersserviceProvider,
    StudentserviceProvider
  ]
})
export class AppModule {}
