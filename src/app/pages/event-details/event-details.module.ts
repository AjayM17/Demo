import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EventDetailsPageRoutingModule } from './event-details-routing.module';
import { EventDetailsPage } from './event-details.page';
import { CustomPipeModule } from '../../custum_pipes/custom_pipes.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventDetailsPageRoutingModule,
    CustomPipeModule
  ],
  declarations: [EventDetailsPage],
})
export class EventDetailsPageModule {}
