import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-custom-file-upload',
  templateUrl: './custom-file-upload.component.html',
  styleUrls: ['./custom-file-upload.component.scss'],
})
export class CustomFileUploadComponent implements OnInit {

  @Input() fieldDetails
  @Input() formgroup: FormGroup
  @Output() onFileUpload = new EventEmitter()

  file_details = {
    empty: false,
    size: false
  }
  accept_files = ""
  file_size = ""
  constructor() { }

  ngOnInit() {
    this.file_size = this.fieldDetails['conditions'][1]['value']
    let accept_files = this.fieldDetails['conditions'][0]['value'].split(',')
    accept_files.forEach(data => {
      this.accept_files = this.accept_files + "." + data + ","
    })
  }

  uploadFile(event) {

    const file = event.target['files'][0]

    this.getFileSize(file.size)
    if (this.getFileSize(file.size)) {
      const param = {
        "_id": this.fieldDetails._id,
        "fileName": file.name,
        "mimeType": file.type,
        "url": "http://www.pdf995.com/samples/pdf.pdf"
      }
      this.onFileUpload.emit(param)
      this.file_details['empty'] = true
      this.file_details['size'] = true
      this.formgroup.get(this.fieldDetails._id).setValue(this.file_details)
    } else {
      this.file_details['empty'] = true
      this.file_details['size'] = false
      this.formgroup.get(this.fieldDetails._id).setValue(this.file_details)
    }
  }

  getFileSize(bytes) {
    if (bytes == 0) {
      return false
    }
    var k = 1000,
      dm = 2,
      i = Math.floor(Math.log(bytes) / Math.log(k));
    const size = Math.floor(parseFloat((bytes / Math.pow(k, i)).toFixed(dm)))
    if (size <= parseInt(this.file_size)) {
      return true
    }
    return false
  }

}
