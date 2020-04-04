import { AbstractControl, FormControl } from '@angular/forms';

export function validateFile() {
  return null
}

export function validateInput(control: AbstractControl){
  if(control.value.toString().trim() != ''){
    return null
  }
  return {isEmpty:true}
}

export function ValidateFileSize(control: FormControl){
  if(control.value['empty'] && control.value['size']){
    return null
  }

  return {isInValidsize:true}
}
