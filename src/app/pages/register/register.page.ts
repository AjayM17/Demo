import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ValidateFileSize ,validateInput } from '../../components/custom-form-validation/custom-form-validation';

@Component({
	selector: 'app-register',
	templateUrl: './register.page.html',
	styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

	custom_fields = []
	registerForm: FormGroup;
	responseOnSubmit = []
	event_id=null
	
	constructor(private router: ActivatedRoute, private formBuilder: FormBuilder) {
		this.router.queryParams.subscribe(params => {
			 this.custom_fields = JSON.parse(params['registrationForm'])
			 this.event_id = params['event_id']
		})
	}

	ngOnInit() {
		let group: any = {}
		this.custom_fields.forEach((field) => {
			if(field.mandatory){
				if (field.type == 'text' || field.type == 'textarea' || field.type == 'select' || field.type == 'multiselect' || field.type == 'radio' ) {
					group[field._id] = new FormControl('',validateInput)
				}
				if(field.type == 'file'){
					group[field._id] = new FormControl('' , [validateInput, ValidateFileSize])
				}
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
			this.responseOnSubmit[field_index]['responses']= param.value
		}
	}

	onFileUploaded(param){
		const field_index = this.responseOnSubmit.findIndex(field => field.questionId == param._id)
		if(field_index != -1){
			this.responseOnSubmit[field_index]['uploadResponse']= param
		}
	}

	submitForm() {
		Object.keys(this.registerForm.controls).forEach(_id => {
			const field_index = this.responseOnSubmit.findIndex(field => field.questionId == _id)
			if(typeof(this.registerForm.get(_id).value) == 'object'){
				this.responseOnSubmit[field_index]['responses'] = this.registerForm.get(_id).value
			} else {
				this.responseOnSubmit[field_index]['responses'] = [this.registerForm.get(_id).value]
			}
		})
		const details ={
			event: this.event_id,
			registration:this.responseOnSubmit
		} 
		console.log(details)
	}
}
