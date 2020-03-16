import { Component, OnInit } from '@angular/core';
import { ModalController , NavParams } from '@ionic/angular';

@Component({
  selector: 'app-promote',
  templateUrl: './promote.page.html',
  styleUrls: ['./promote.page.scss'],
})
export class PromotePage implements OnInit {

  promote = null
  constructor(navParams: NavParams ,private modalController: ModalController) {
     this.promote = navParams.get('promote')
     console.log(this.promote)
   }


  ngOnInit() {
  }

  close = () =>{
    this.modalController.dismiss()
  }

}
