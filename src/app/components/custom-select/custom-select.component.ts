import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss'],
})
export class CustomSelectComponent implements OnInit {

  @Input() formgroup
  @Input() fieldDetails
  @Input() multiselect

  constructor() { }

  ngOnInit() {
  }

}
