import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { User } from "../../models/user";
import { AngularFireAuth } from "angularfire2/auth";
import { AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

	user = {} as User;

  constructor
  (
  private alertCtrl: AlertController,
  private afAuth: AngularFireAuth,
  public navCtrl: NavController,
  public navParams: NavParams
  ) {
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
    title: 'Confirmação',
    subTitle: 'Registrado com sucesso',
    buttons: ['Continuar']
    });
    alert.present();
}

  async register(user: User){
  	try{
  		const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
  		if(result){
        this.presentAlert();
        this.navCtrl.setRoot('LoginPage');
      }

  	}
  	catch(e) {
  		console.error(e);
  	}
  }

}
