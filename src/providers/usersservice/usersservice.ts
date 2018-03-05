import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import * as firebase from 'firebase';



@Injectable()
export class UsersserviceProvider {

		 public data: any;
		 public fireAuth: any;
 		 public userProfile: any;

  constructor(public http: HttpClient) {

 this.fireAuth = firebase.auth();

  	 this.userProfile = firebase.database().ref('customers');

    console.log('Hello UsersserviceProvider Provider');
  }

   loginUserService(email: string, password: string): any {
    return this.fireAuth.signInWithEmailAndPassword(email, password);
  }

    signupUserService(account: {}){

    
        return this.fireAuth.createUserWithEmailAndPassword(account['email'], account['password']).then((newUser) => {
          //sign in the user
          this.fireAuth.signInWithEmailAndPassword(account['email'], account['password']).then((authenticatedUser) => {
            //successful login, create user profile
          this.userProfile.child(authenticatedUser.uid).set(
            account
          );
          });
        });

  }

}
