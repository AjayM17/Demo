import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-events-listing',
  templateUrl: './events-listing.page.html',
  styleUrls: ['./events-listing.page.scss'],
})
export class EventsListingPage implements OnInit {

  events = [
    {
      "_id": "5e2ef2b2ecc332c240c684a6",
      "title": "Mahindra War Room",
      "slug": "demo-event-title",
      "featured": true,
      "featuredImage": {
        "url": "https://i.picsum.photos/id/476/800/450.jpg"
      },
      "scheduleStart": "2020-03-29T10:00:00.000+00:00",
      "scheduleEnd": "2020-03-29T15:00:00.000+00:00",
      "price": 0
    },
    {
      "_id": "5e2ef2b2ecc332c240c684a6",
      "title": "Mahindra War Room",
      "slug": "demo-event-title",
      "featured": false,
      "featuredImage": {
        "url": "https://i.picsum.photos/id/476/800/450.jpg"
      },
      "scheduleStart": "2020-03-29T10:00:00.000+00:00",
      "scheduleEnd": "2020-03-29T15:00:00.000+00:00",
      "price": 0
    },
    {
      "_id": "5e2ef2b2ecc332c240c684a6",
      "title": "Mahindra War Room",
      "slug": "demo-event-title",
      "featured": false,
      "featuredImage": {
        "url": "https://i.picsum.photos/id/476/800/450.jpg"
      },
      "scheduleStart": "2020-03-29T10:00:00.000+00:00",
      "scheduleEnd": "2020-03-29T15:00:00.000+00:00",
      "price": 0
    }
  ]

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToEventDetailsPage =() =>{
    this.router.navigateByUrl('event-details')
  }

}
