import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventsListingPage } from './events-listing.page';

const routes: Routes = [
  {
    path: '',
    component: EventsListingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventsListingPageRoutingModule {}
