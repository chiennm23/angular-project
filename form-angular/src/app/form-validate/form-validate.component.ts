import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormControlName, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-validate',
  templateUrl: './form-validate.component.html',
  styleUrls: ['./form-validate.component.scss']
})
export class FormValidateComponent implements OnInit {
  userAddForm = FormGroup;
  constructor(protected fb: FormBuilder) { }

  ngOnInit(): void {
    // @ts-ignore
    this.userAddForm = this.fb.group({
      id: [''],
      name: [''],
      email: [''],
      address: ['']
    });
  }

  submit() {
    let data = this.userAddForm.value;
    console.log(data);
  }
}
