import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AgendaPage } from '../agenda/agenda.page'
import { PromotePage } from '../promote/promote.page'

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.page.html',
  styleUrls: ['./event-details.page.scss'],
})
export class EventDetailsPage implements OnInit {

  event_details = {
    "_id": "5e2ef2b2ecc332c240c684a6",
    "title": "Mahindra War Room",
    "slug": "demo-event-title",
    "user": "5e2eedcaecc332c240c6849f",
    "organization": "5e58b737ac09272712a8eb51",
    "featuredImage": {
      "url": "https://i.picsum.photos/id/476/800/450.jpg"
    },
    "categories": [
      {
        "name": "Marketing"
      },
      {
        "name": "Finance"
      }
    ],
    "scheduleStart": "2020-03-29T10:00:00.000+00:00",
    "scheduleEnd": "2020-03-29T15:00:00.000+00:00",
    "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae placerat mi, id consequat ex. Donec ac risus quis elit elementum tempor. Morbi venenatis ante risus, ac venenatis libero dictum eget. Duis ullamcorper facilisis volutpat. <strong>Sed porta mauris in est lacinia, eget feugiat orci sodales<strong>. Nunc eu odio vitae urna tempor mollis in semper leo. Etiam mollis varius odio sit amet ultrices. Mauris et sollicitudin dui, id imperdiet elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras dignissim nulla et commodo convallis. Phasellus imperdiet, felis sed posuere vehicula, neque augue vehicula ipsum, vitae lacinia elit nisi non nunc.</p><p>Nulla euismod sodales scelerisque. Sed egestas nulla quis <span style=\"text-transform:uppercase\">cursus</span> vestibulum. Nullam nec malesuada metus. Nunc consequat magna sit amet lobortis sodales. Suspendisse auctor metus in erat pulvinar porttitor. Nunc pharetra, elit ac aliquam scelerisque, sem mauris sodales ante, sit amet varius mauris augue viverra ex. Vivamus sodales, massa at elementum condimentum, dui velit bibendum lacus, eget consequat orci mi a ex. Nullam pharetra nibh ac ligula tempus, sed eleifend nibh egestas. Vivamus eleifend, eros in pretium fringilla, magna justo egestas erat, sed accumsan lectus justo vitae neque. Curabitur quis pharetra nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam vitae diam quis ante congue fringilla eget eu ipsum.</p>",
    "feeds": [
      {
        "title": "Test Article Title1",
        "featuredImage": {
          "url": "https://i.picsum.photos/id/446/800/450.jpg"
        },
        "user": {
          "name": "Demo Name1",
          "avatar": {
            "url": "https://i.picsum.photos/id/1011/200/200.jpg"
          }
        },
        "createdAt": "2020-01-29T13:43:26.839+00:00",
        "updatedAt": "2020-01-29T13:43:26.839+00:00"
      },
      {
        "title": "Test Article Title2",
        "featuredImage": {
          "url": "https://i.picsum.photos/id/1026/800/450.jpg"
        },
        "user": {
          "name": "Demo Name2",
          "avatar": {
            "url": "https://i.picsum.photos/id/1027/200/200.jpg"
          }
        },
        "createdAt": "2020-02-28T14:49:47.451+00:00",
        "updatedAt": "2020-02-28T14:49:47.451+00:00"
      }
    ],
    "readingMaterial": [
      {
        "title": "Creative Writing topic",
        "material": {
          "url": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
        }
      }
    ],
    "schedule": [
      {
        "title": "Registration",
        "description": "",
        "timingStart": "2020-03-28T12:00:00.000+00:00",
        "timingEnd": "2020-03-28T13:00:00.000+00:00"
      },
      {
        "title": "Pre-Conference",
        "description": "",
        "timingStart": "2020-03-28T13:00:00.000+00:00",
        "timingEnd": "2020-03-28T15:00:00.000+00:00"
      }
    ],
    "rsvp": 35,
    "location": {
      "address": "The Cuckoo Club, Saint Andrews Road, next to Candies, Bandra West, Mumbai, Maharashtra",
      "location": {
        "lng": 72.8243346,
        "lat": 19.0613182
      }
    },
    "price": 0,
    "registrationForm": [],
    "speakers": [
      {
        "title": "Johny Vino",
        "subTitle": "UI Designer",
        "description": "",
        "featuredImage": {
          "url": "https://randomuser.me/api/portraits/men/41.jpg"
        }
      },
      {
        "title": "James Hans",
        "subTitle": "UX Designer",
        "description": "",
        "featuredImage": {
          "url": "https://randomuser.me/api/portraits/men/45.jpg"
        }
      }
    ],
    "sponsors": [
      {
        "title": "Google",
        "subTitle": "",
        "description": "",
        "featuredImage": {
          "url": "../../../assets/icon/google.png"
        }
      },
      {
        "title": "Jio",
        "subTitle": "",
        "description": "",
        "featuredImage": {
          "url": "../../../assets/icon/jio.png"
        }
      }
    ],
    "hostedBy": [
      {
        "title": "Json Roy",
        "subTitle": "",
        "description": "",
        "featuredImage": {
          "url": "https://randomuser.me/api/portraits/men/42.jpg"
        }
      },
      {
        "title": "Ankit Sharma",
        "subTitle": "",
        "description": "",
        "featuredImage": {
          "url": "https://randomuser.me/api/portraits/men/43.jpg"
        }
      }
    ],
    "attachableFeature": [],
    "status": "active",
    "featured": false
  }

  desc_max_height : number=14
  isShowMore : boolean= false
  rotateArrow: boolean = false

  constructor(public modalController: ModalController) {


   }

  ngOnInit() {
  }

  toggleText =() =>{
    this.isShowMore = ! this.isShowMore
    this.rotateArrow = ! this.rotateArrow
  }

  async showAgendaModal() {
    const modal = await this.modalController.create({
      component: AgendaPage,
      componentProps:{
        'agenda': this.event_details['schedule']
      }
    });
    return await modal.present();
  }

  async showPromoteModal() {
    const modal = await this.modalController.create({
      component: PromotePage,
      componentProps:{
        'promote': this.event_details['sponsors']
      }
    });
    return await modal.present();
  }
}
