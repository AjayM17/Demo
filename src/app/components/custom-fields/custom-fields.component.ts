import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
	selector: 'app-custom-fields',
	templateUrl: './custom-fields.component.html',
	styleUrls: ['./custom-fields.component.scss'],
})
export class CustomFieldsComponent implements OnInit {

	@Input() customFields = [];
	registerForm: FormGroup;
	constructor(private formBuilder: FormBuilder) { }

	ngOnInit() {
		let group: any = {}
		this.customFields.forEach(field => {
			if (field.type == 'text' || field.type == 'textarea' || field.type == 'select' || field.type == 'multiselect' || field.type == 'radio') {
				group[field.key] = field.mandatory ? new FormControl(field.value, Validators.required) : new FormControl('')
			}
		})
		this.registerForm = this.formBuilder.group(group)
	}

	validateForm() {
	}

	doReorder(ev: any) {
		ev.detail.complete();
	}

}
