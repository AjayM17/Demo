import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegisterPageRoutingModule } from './register-routing.module';
import { RegisterPage } from './register.page';
// import { ComponentsModule } from '../../components/components.module';
import { CustomInputComponent } from '../../components/custom-input/custom-input.component'
import { from } from 'rxjs';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPageRoutingModule,
    ReactiveFormsModule
    // ComponentsModule
  ],
  declarations:[RegisterPage,CustomInputComponent],
  exports:[CustomInputComponent]
})
export class RegisterPageModule {}
