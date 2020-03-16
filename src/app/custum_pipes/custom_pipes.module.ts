import { NgModule } from '@angular/core';;
import { DatePipe } from '@angular/common';
import { TimePipe } from '../custum_pipes/time.pipe'

@NgModule({
  declarations: [TimePipe],
  exports:[TimePipe],
  providers:[DatePipe]
})
export class CustomPipeModule {}
