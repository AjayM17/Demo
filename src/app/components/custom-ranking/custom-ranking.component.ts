import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-ranking',
  templateUrl: './custom-ranking.component.html',
  styleUrls: ['./custom-ranking.component.scss'],
})
export class CustomRankingComponent implements OnInit {

  @Input() fieldDetails
  @Output() onReorderd = new EventEmitter()
  options = []
  constructor() {

  }

  ngOnInit() {
    this.options = this.fieldDetails.options
  }

  doReorder(event) {
    event.detail.complete();
    let temp = this.options[event.detail.from]
    this.options[event.detail.from] = this.options[event.detail.to]
    this.options[event.detail.to] = temp
    const param ={
      _id : this.fieldDetails._id,
      value: this.options
    }
    this.onReorderd.emit(param)

  }

}
