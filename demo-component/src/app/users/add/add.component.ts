import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-users-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  userAddForm: FormGroup;
  constructor(protected fb: FormBuilder) { }

  ngOnInit(): void {
    this.userAddForm = this.fb.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.email, Validators.required]],
      address: ['', [Validators.required]]
    });
  }

  // tslint:disable-next-line:typedef
  submit() {
    const data = this.userAddForm.value;
    console.log(data);
  }
  // tslint:disable-next-line:typedef
  get name(){
    return this.userAddForm.get('name');
  }
  // tslint:disable-next-line:typedef
  get id(){
    return this.userAddForm.get('id');
  }
  // tslint:disable-next-line:typedef
  get email(){
    return this.userAddForm.get('email');
  }
  // tslint:disable-next-line:typedef
  get address(){
    return this.userAddForm.get('address');
  }
}
