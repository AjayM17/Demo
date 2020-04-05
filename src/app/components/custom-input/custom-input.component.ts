import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
})
export class CustomInputComponent implements OnInit {
  @Input() formgroup
  @Input() fieldDetails
  constructor() { }

  ngOnInit() {
    console.log(this.fieldDetails._id)
    console.log(this.formgroup.controls)
    console.log(this.formgroup.controls.hasOwnProperty(this.fieldDetails._id))
  }

}
