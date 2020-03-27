import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  custom_fields=[]
  constructor(private router: ActivatedRoute,) { 
    this.router.queryParams.subscribe(params => {
      this.custom_fields = JSON.parse(params['registrationForm'])
    })

  }

  ngOnInit() {
  }

}
