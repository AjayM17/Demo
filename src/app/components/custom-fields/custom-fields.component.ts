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
	"registrationForm": [
		{
		  "_id": "5e79cf1ba2481779faa872b6",
		  "label": "Personal Details",
		  "placeholder": "",
		  "description": "",
		  "key": "personal_detail_label",
		  "type": "label",
		  "options": [],
		  "conditions": [],
		  "mandatory": false
		},
		{
		  "_id": "5e79d38b0cdadfbe21075dd9",
		  "label": "Describe yourself in a few words",
		  "placeholder": "",
		  "description": "Keep it short",
		  "key": "about_you",
		  "type": "textarea",
		  "options": [],
		  "conditions": [],
		  "mandatory": true
		},
		{
		  "_id": "5e79d392c09857b3665bbeeb",
		  "label": "How much did you get in your grad",
		  "placeholder": "Grad %",
		  "description": "",
		  "key": "percentage",
		  "type": "text",
		  "options": [],
		  "conditions": [],
		  "mandatory": true
		},
		{
		  "_id": "5e79d39850ea118e31ff35f2",
		  "label": "Select your country",
		  "placeholder": "",
		  "description": "",
		  "key": "your_country",
		  "type": "select",
		  "options": [
			{"label": "Mumbai", "value": "mumbai"},
			{"label": "Delhi", "value": "delhi"},
			{"label": "Bangalore", "value": "bangalore"},
			{"label": "Hyderabad", "value": "hyderabad"}
		  ],
		  "conditions": [],
		  "mandatory": true
		},
		{
		  "_id": "5e79d3a074417881d8651c59",
		  "label": "Select your preferred job locattion",
		  "placeholder": "",
		  "description": "",
		  "key": "pref_job_location",
		  "type": "multiselect",
		  "options": [
			{"label": "Mumbai", "value": "mumbai"},
			{"label": "Delhi", "value": "delhi"},
			{"label": "Bangalore", "value": "bangalore"},
			{"label": "Hyderabad", "value": "hyderabad"}
		  ],
		  "conditions": [],
		  "mandatory": true
		},
		{
		  "_id": "5e79d3a6c3b7371c5b54ee0e",
		  "label": "Upload Resume",
		  "placeholder": "",
		  "description": "DOC, DOCX, PDF (5,120KB)",
		  "key": "resume",
		  "type": "file",
		  "options": [],
		  "conditions": [{"key": "file_type", "value": "doc,docx,pdf"}, {"key": "file_size", "value": "5120"}],
		  "mandatory": true
		},
		{
		  "_id": "5e79d3adb159b88c208aa4a7",
		  "label": "What kind of job are you looking for",
		  "placeholder": "",
		  "description": "",
		  "key": "job_type",
		  "type": "radio",
		  "options": [{"label": "Internship", "value": "internship"}, {"label": "Full Time", "value": "full-time"}],
		  "conditions": [],
		  "mandatory": true
		},
		{
		  "_id": "5e79d3b5f76b7a6b1fdf7527",
		  "label": "Order companies based on your priority",
		  "placeholder": "",
		  "description": "",
		  "key": "your_country",
		  "type": "ranking",
		  "options": [
			{"label": "Mahindra", "value": "mahindra"},
			{"label": "Flipkart", "value": "flipkart"},
			{"label": "P&G", "value": "p&g"},
			{"label": "Tata Steel", "value": "tata steel"}
		  ],
		  "conditions": [],
		  "mandatory": true
		},
		{
		  "_id": "5e79d3baf5f00e252fce65cc",
		  "label": "Download Brochure",
		  "placeholder": "",
		  "description": "",
		  "key": "download",
		  "type": "download",
		  "options": [],
		  "conditions": [{"key": "file", "value": "http://www.pdf995.com/samples/pdf.pdf"}],
		  "mandatory": true
		},
		{
		  "_id": "5e79d3c105b2b573215c94bd",
		  "label": "Add me to WhatsApp Group",
		  "placeholder": "",
		  "description": "",
		  "key": "whatsapp_add",
		  "type": "toggle",
		  "options": [],
		  "conditions": [],
		  "mandatory": false
		},
		{
		  "_id": "5e79d3c6dcc2859f040c4c9e",
		  "label": "Please read our terms and conditions properly before registering",
		  "placeholder": "",
		  "description": "",
		  "key": "t&c",
		  "type": "link",
		  "options": [],
		  "conditions": [{"key": "link", "value": "https://policies.google.com/terms?fg=1"}],
		  "mandatory": false
		}
	  ]
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

	fileUpload(e){
		console.log(e.target.files[0])
	}

	doReorder(ev: any) {
		ev.detail.complete();
	}

}
