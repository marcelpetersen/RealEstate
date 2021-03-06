import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { iSoldItem } from '../../interfaces/sold-item.interface';
import { AppService } from '../../services/app.service';

@IonicPage()
@Component({
  selector: 'page-popover-info',
  templateUrl: 'popover-info.html',
})
export class PopoverInfoPage {

  objKey: { key: string, data: iSoldItem } = null;
  obj: iSoldItem = null;
  data: any;
  imgURL;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl: ViewController,
    private appService: AppService) {

    // this.data = this.appService.getObjectInfoForPopover();
    this.objKey = this.navParams.data;
    this.obj = this.objKey.data;
    console.log(this.obj);
    if(this.obj.PHOTOS){
      this.imgURL = this.obj.PHOTOS[0];
    }else{
      this.imgURL = 'http://clipartall.com/subimg/house-clipart-black-and-white-image-galleries-imagekb-house-clipart-black-and-white-1024_768.jpg'
    }
    this.data = {
      imgUrl: this.imgURL,
      price: this.appService.convertToCurrency(this.obj.PRICE.toString(),','),
      dtSan: this.obj.GROUNDSQUARES,
      dtSd: this.obj.USEDSQUARES
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverInfoPage');
    // console.log(this.data);
  }

  closePopover() {
    this.viewCtrl.dismiss();
  }

  goToDetail() {
    console.log('go to detailed page');
    this.navCtrl.push('ShowItemDetailPage', this.objKey)
    // this.navCtrl.push('AddItemPage');
  }
}


/*
input: { key: KEY, data: iSoldItem}
*/