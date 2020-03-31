import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-custom-label',
  templateUrl: './custom-label.component.html',
  styleUrls: ['./custom-label.component.scss'],
})
export class CustomLabelComponent implements OnInit {

  @Input() fieldDetails
  constructor() { }

  ngOnInit() {
  }

}
