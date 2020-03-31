import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-custom-link',
  templateUrl: './custom-link.component.html',
  styleUrls: ['./custom-link.component.scss'],
})
export class CustomLinkComponent implements OnInit {

  @Input() fieldDetails
  constructor() { }

  ngOnInit() {
  }

}
