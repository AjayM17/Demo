import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.page.html',
  styleUrls: ['./ticket.page.scss'],
})
export class TicketPage implements OnInit {

  qr_code_url = '../../../assets/images/qr_code.png'
  constructor() { }

  ngOnInit() {
  }

}
