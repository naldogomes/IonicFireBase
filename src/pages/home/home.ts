import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Profile } from '../../models/profile';
import { AngularFireModule } from 'angularfire2';
// for AngularFireDatabase
import { AngularFireDatabaseModule } from 'angularfire2/database';
// for AngularFireAuth
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  profileData: FirebaseObjectObservable<Profile>

  constructor
  (
  private afAuth: AngularFireAuth,
  private afDatabase: AngularFireDatabase,
  private toast: ToastController,
  public navCtrl: NavController,
  public navParams: NavParams
  ) {
  }

  ionViewDidLoad() {
    this.afAuth.authState.take(1).subscribe(data => {
    	if(data && data.email && data.uid){	
    		this.toast.create({
    			message: `Bem-vindo, ${data.email}`,
    			duration: 3000
    		}).present();

        this.profileData = this.afDatabase.object(`profile/${data.uid}`)

    	}
    	else{
    		this.toast.create({
    			message: 'Usuário não encontrado',
    			duration: 3000
    		}).present();
    	}
    });
  }

  signout(){
    this.afAuth.auth.signOut();
    this.navCtrl.setRoot('LoginPage');
  }

}
