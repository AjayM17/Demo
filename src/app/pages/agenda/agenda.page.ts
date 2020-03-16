import { Component, OnInit } from '@angular/core';
import { ModalController , NavParams } from '@ionic/angular';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {

  agenda = null
  constructor(navParams: NavParams ,private modalController: ModalController) {
     this.agenda = navParams.get('agenda')
     console.log(this.agenda)
   }

  ngOnInit() {
  }

  close = () =>{
    this.modalController.dismiss()
  }

}
