import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventsListingPageRoutingModule } from './events-listing-routing.module';

import { EventsListingPage } from './events-listing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventsListingPageRoutingModule
  ],
  declarations: [EventsListingPage]
})
export class EventsListingPageModule {}
