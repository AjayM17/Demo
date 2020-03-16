import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';


@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {
  constructor(private datePipe: DatePipe) { 
  }
  transform(value: any): any {
  const year = this.datePipe.transform(value,'y')
  const month = this.datePipe.transform(value,'M')
  const date = this.datePipe.transform(value,'d')
  const current_year = this.datePipe.transform(Date.now(),'y')
  const current_month = this.datePipe.transform(Date.now(),'M')
  const current_date = this.datePipe.transform(Date.now(),'d')
    if(year == current_year){
      if(month == current_month){
        if(date == current_date){
          const diff = Math.abs(parseInt(current_date) -parseInt(date))
          return diff > 1? diff + ' days ago'  : diff +' day ago'
        }
      } else{
        const diff = Math.abs(parseInt(current_month) -parseInt(month))
        return diff > 1? diff + ' months ago'  : diff +' month ago'
      }
    }{
      const diff = Math.abs(parseInt(current_year) -parseInt(year))
      return diff > 1? diff + 'years ago'  : diff +' year ago'
    }
  }

}
