import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-toggle',
  templateUrl: './custom-toggle.component.html',
  styleUrls: ['./custom-toggle.component.scss'],
})
export class CustomToggleComponent implements OnInit {

  @Input() fieldDetails
  @Output() onValueToggle = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }

  toggleValue(event){
    const param={
      _id: this.fieldDetails._id,
      value : event.detail.checked
    }
    this.onValueToggle.emit(param)
  }

}
