import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder } 
    from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent  {

  form = new FormGroup({
      "firstName": new FormControl("", Validators.required),
      "password": new FormControl("", Validators.required),
  });

  onSubmitModelBased() {
    console.log("reactive form submitted");
    console.log(this.form);
  }

}

// FormGroup and FormControl 
