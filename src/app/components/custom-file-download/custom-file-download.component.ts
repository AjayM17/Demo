import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-custom-file-download',
  templateUrl: './custom-file-download.component.html',
  styleUrls: ['./custom-file-download.component.scss'],
})
export class CustomFileDownloadComponent implements OnInit {

  @Input() fieldDetails
  constructor() { }

  ngOnInit() {}

}
