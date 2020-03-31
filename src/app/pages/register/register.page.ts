import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
	selector: 'app-register',
	templateUrl: './register.page.html',
	styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

	custom_fields = []
	registerForm: FormGroup;
	responseOnSubmit = []
	
	constructor(private router: ActivatedRoute, private formBuilder: FormBuilder) {
		this.router.queryParams.subscribe(params => {
			 this.custom_fields = JSON.parse(params['registrationForm'])
		})
	}

	ngOnInit() {
		let group: any = {}
		this.custom_fields.forEach((field,index) => {
			if (field.type == 'text' || field.type == 'textarea' || field.type == 'select' || field.type == 'multiselect' || field.type == 'radio') {
				group[field._id] = field.mandatory ? new FormControl('', Validators.required) : new FormControl('')
			}
			const value = {
				"questionId": field['_id'],
				"questionKey": field['key'],
				"responses": null,
				"uploadResponse": null
			}
			this.responseOnSubmit.push(value)
		})
		this.registerForm = this.formBuilder.group(group)
	}

	onToggle(param) {
		const field_index = this.responseOnSubmit.findIndex(field => field.questionId == param._id)
		if(field_index != -1){
			this.responseOnSubmit[field_index]['responses']= [param.value]
		}
	}

	setReorder(param){
		const field_index = this.responseOnSubmit.findIndex(field => field.questionId == param._id)
		if(field_index != -1){
			console.log(field_index)
			this.responseOnSubmit[field_index]['responses']= param.value
		}
	}

	onFileUploaded(param){
		const field_index = this.responseOnSubmit.findIndex(field => field.questionId == param._id)
		if(field_index != -1){
			this.responseOnSubmit[field_index]['uploadResponse']= param
		}
		console.log(this.responseOnSubmit)
	}

	submitForm() {
		console.log(this.registerForm.controls)
		Object.keys(this.registerForm.controls).forEach(_id => {
			console.log(_id)
			const field_index = this.responseOnSubmit.findIndex(field => field.questionId == _id)
			console.log(typeof(this.registerForm.get(_id).value))
			console.log((this.registerForm.get(_id).value))
			if(typeof(this.registerForm.get(_id).value) == 'object'){
				this.responseOnSubmit[field_index]['responses'] = this.registerForm.get(_id).value
			} else {
				this.responseOnSubmit[field_index]['responses'] = [this.registerForm.get(_id).value]
			}
		})
		console.log(this.responseOnSubmit)
	}
}
