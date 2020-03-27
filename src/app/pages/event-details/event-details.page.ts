import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AgendaPage } from '../agenda/agenda.page'
import { PromotePage } from '../promote/promote.page'
import { Router, NavigationExtras } from '@angular/router';

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
    "categories": [{"name": "Marketing"}, {"name": "Finance"}],
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
          "url": ""
        }
      },
      {
        "title": "Mahindra",
        "subTitle": "",
        "description": "",
        "featuredImage": {
          "url": ""
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
    "registrationForm": [
      {
        "_id": "5e79cf1ba2481779faa872b6",
        "label": "Personal Details",
        "placeholder": "",
        "description": "",
        "key": "personal_detail_label",
        "type": "label",
        "options": [],
        "conditions": [],
        "mandatory": false
      },
      {
        "_id": "5e79d38b0cdadfbe21075dd9",
        "label": "Describe yourself in a few words",
        "placeholder": "",
        "description": "Keep it short",
        "key": "about_you",
        "type": "textarea",
        "options": [],
        "conditions": [],
        "mandatory": true
      },
      {
        "_id": "5e79d392c09857b3665bbeeb",
        "label": "How much did you get in your grad",
        "placeholder": "Grad %",
        "description": "",
        "key": "percentage",
        "type": "text",
        "options": [],
        "conditions": [],
        "mandatory": true
      },
      {
        "_id": "5e79d39850ea118e31ff35f2",
        "label": "Select your country",
        "placeholder": "",
        "description": "",
        "key": "your_country",
        "type": "select",
        "options": [
          {"label": "Mumbai", "value": "mumbai"},
          {"label": "Delhi", "value": "delhi"},
          {"label": "Bangalore", "value": "bangalore"},
          {"label": "Hyderabad", "value": "hyderabad"}
        ],
        "conditions": [],
        "mandatory": true
      },
      {
        "_id": "5e79d3a074417881d8651c59",
        "label": "Select your preferred job locattion",
        "placeholder": "",
        "description": "",
        "key": "pref_job_location",
        "type": "multiselect",
        "options": [
          {"label": "Mumbai", "value": "mumbai"},
          {"label": "Delhi", "value": "delhi"},
          {"label": "Bangalore", "value": "bangalore"},
          {"label": "Hyderabad", "value": "hyderabad"}
        ],
        "conditions": [],
        "mandatory": true
      },
      {
        "_id": "5e79d3a6c3b7371c5b54ee0e",
        "label": "Upload Resume",
        "placeholder": "",
        "description": "DOC, DOCX, PDF (5,120KB)",
        "key": "resume",
        "type": "file",
        "options": [],
        "conditions": [{"key": "file_type", "value": "doc,docx,pdf"}, {"key": "file_size", "value": "5120"}],
        "mandatory": true
      },
      {
        "_id": "5e79d3adb159b88c208aa4a7",
        "label": "What kind of job are you looking for",
        "placeholder": "",
        "description": "",
        "key": "job_type",
        "type": "radio",
        "options": [{"label": "Internship", "value": "internship"}, {"label": "Full Time", "value": "full-time"}],
        "conditions": [],
        "mandatory": true
      },
      {
        "_id": "5e79d3b5f76b7a6b1fdf7527",
        "label": "Order companies based on your priority",
        "placeholder": "",
        "description": "",
        "key": "your_country",
        "type": "ranking",
        "options": [
          {"label": "Mahindra", "value": "mahindra"},
          {"label": "Flipkart", "value": "flipkart"},
          {"label": "P&G", "value": "p&g"},
          {"label": "Tata Steel", "value": "tata steel"}
        ],
        "conditions": [],
        "mandatory": true
      },
      {
        "_id": "5e79d3baf5f00e252fce65cc",
        "label": "Download Brochure",
        "placeholder": "",
        "description": "",
        "key": "download",
        "type": "download",
        "options": [],
        "conditions": [{"key": "file", "value": "http://www.pdf995.com/samples/pdf.pdf"}],
        "mandatory": true
      },
      {
        "_id": "5e79d3c105b2b573215c94bd",
        "label": "Add me to WhatsApp Group",
        "placeholder": "",
        "description": "",
        "key": "whatsapp_add",
        "type": "toggle",
        "options": [],
        "conditions": [],
        "mandatory": false
      },
      {
        "_id": "5e79d3c6dcc2859f040c4c9e",
        "label": "Please read our terms and conditions properly before registering",
        "placeholder": "",
        "description": "",
        "key": "t&c",
        "type": "link",
        "options": [],
        "conditions": [{"key": "link", "value": "https://policies.google.com/terms?fg=1"}],
        "mandatory": false
      }
    ],
    "attachableFeature": [],
    "status": "active",
    "featured": false
  }
  
  desc_max_height : number=14
  isShowMore : boolean= false
  rotateArrow: boolean = false

  constructor(public modalController: ModalController, private router: Router) {
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

  goToRegistrationPage = () =>{
    const param = {
    registrationForm: JSON.stringify(this.event_details['registrationForm'])
    };
    const navigationExtras: NavigationExtras = {
      queryParams: param,
      skipLocationChange: true
    };
  this.router.navigate(['register'], navigationExtras);
  //this.router.navigate(['ticket']);
  }
}
