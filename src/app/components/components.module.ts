import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CustomFieldsComponent } from '../components/custom-fields/custom-fields.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,    
  ],
  declarations: [CustomFieldsComponent],
  exports:[CustomFieldsComponent]
})
export class ComponentsModule {}
