import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-file-upload',
  templateUrl: './custom-file-upload.component.html',
  styleUrls: ['./custom-file-upload.component.scss'],
})
export class CustomFileUploadComponent implements OnInit {

  @Input() fieldDetails
  @Output() onFileUpload = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }

  uploadFile() {
    const param = {
      "_id": this.fieldDetails._id,
      "fileName": "Demo resume.pdf",
      "mimeType": "application/pdf",
      "url": "http://www.pdf995.com/samples/pdf.pdf"
    }
    this.onFileUpload.emit(param)
  }

}
