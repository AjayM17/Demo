import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-custom-textarea',
  templateUrl: './custom-textarea.component.html',
  styleUrls: ['./custom-textarea.component.scss'],
})
export class CustomTextareaComponent implements OnInit {
  @Input() formgroup
  @Input() fieldDetails
  constructor() { }

  ngOnInit() {
  }

}
