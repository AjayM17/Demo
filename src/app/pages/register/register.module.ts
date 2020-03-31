import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegisterPageRoutingModule } from './register-routing.module';
import { RegisterPage } from './register.page';
// import { ComponentsModule } from '../../components/components.module';
import { CustomInputComponent } from '../../components/custom-input/custom-input.component'
import { CustomTextareaComponent } from '../../components/custom-textarea/custom-textarea.component'
import { CustomSelectComponent } from '../../components/custom-select/custom-select.component'
import { CustomRadioComponent } from '../../components/custom-radio/custom-radio.component'
import { CustomLabelComponent } from '../../components/custom-label/custom-label.component'
import { CustomLinkComponent } from '../../components/custom-link/custom-link.component'
import { CustomRankingComponent } from '../../components/custom-ranking/custom-ranking.component'
import { CustomToggleComponent } from '../../components/custom-toggle/custom-toggle.component'
import { CustomFileUploadComponent } from '../../components/custom-file-upload/custom-file-upload.component'
import { CustomFileDownloadComponent } from '../../components/custom-file-download/custom-file-download.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations:[
    RegisterPage,
    CustomTextareaComponent,
    CustomInputComponent,
    CustomSelectComponent,
    CustomRadioComponent,
    CustomLabelComponent,
    CustomLinkComponent,
    CustomRankingComponent,
    CustomToggleComponent,
    CustomFileUploadComponent,
    CustomFileDownloadComponent
  ],
  exports:[
    CustomTextareaComponent,
    CustomInputComponent,
    CustomSelectComponent,
    CustomRadioComponent,
    CustomLabelComponent,
    CustomLinkComponent,
    CustomRankingComponent,
    CustomToggleComponent,
    CustomFileUploadComponent,
    CustomFileDownloadComponent
  ]
})
export class RegisterPageModule {}
