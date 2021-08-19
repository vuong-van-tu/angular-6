import {Component, OnInit} from '@angular/core';
import {User} from '../user';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  users: User[] = [];
  userForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required])
  });

  constructor() {
  }

  ngOnInit() {
  }

  getEmail() {
    return this.userForm.get('email');
  }

  getPassword() {
    return this.userForm.get('password');
  }

  getConfirmPassword() {
    return this.userForm.get('confirmPassword');
  }

  getCountry() {
    return this.userForm.get('country');
  }

  getAge() {
    return this.userForm.get('age');
  }

  getGender() {
    return this.userForm.get('gender');
  }

  getPhone() {
    return this.userForm.get('phone');
  }

  createUser() {
    let user = {
      email: this.userForm.value.email,
      password: this.userForm.value.password,
      confirmPassword: this.userForm.value.confirmPassword,
      country: this.userForm.value.country,
      age: this.userForm.value.age,
      gender: this.userForm.value.gender,
      phone: this.userForm.value.phone
    };
   if (this.isValidated(user)){
     this.users.push(user);
   }
  }

  isValidated(user: User) {
    return user.email != '' && user.password != '' && user.confirmPassword != '' && user.country != '' && user.gender != '' && user.age != '' && user.phone != '';
  }
  checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => {
    let pass = group.get('password').value;
    let confirmPass = group.get('confirmPassword').value
    return pass === confirmPass ? null : { notSame: true }
  }
}
