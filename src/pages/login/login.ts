import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database-deprecated';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
var aut;
export class LoginPage {

	user = {} as User;

  constructor
  (
  private afAuth: AngularFireAuth,
  public navCtrl: NavController,
  public navParams: NavParams
  ) {
  }

  async login(user: User) {



    // this.afAuth.auth.signOut();
    // try{
    //   const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
    //   if(result){
    //       console.log("Entrei")
    //       //this.navCtrl.setRoot('ProfilePage');
    //      // console.log(retorno[0]['id'] + ' Ok 1');
    //   }
    //   else {
    //     console.log("Erro")
    //     this.navCtrl.setRoot('LoginPage');
    //   }
    // }
    // catch(e){
    //   console.error(e);
    // }
  }

  register() {
  	this.navCtrl.push('RegisterPage');
  }

}
