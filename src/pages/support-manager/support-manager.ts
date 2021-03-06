import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { iSupport } from '../../interfaces/support.interface';
import { AppService } from '../../services/app.service';
import { AngularFireService } from '../../services/af.service';
@IonicPage()
@Component({
  selector: 'page-support-manager',
  templateUrl: 'support-manager.html',
})
export class SupportManagerPage {
  supports;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private appService: AppService,
    private afService: AngularFireService ) {

      this.afService.getList('Ticket').subscribe((tickets)=>{
        this.supports = tickets
        console.log(this.supports);
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SupportManagerPage');
  }

  go2Support(support){
    console.log(support);
    this.navCtrl.push('SupportPage', {action: 'admin-view', data: support, key: support.$key});
  }

}
