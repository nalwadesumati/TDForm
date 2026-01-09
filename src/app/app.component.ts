import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'TDFORM';
  @ViewChild('signUpForm') signUpForm!: NgForm;
  userDetails = {
    username: 'suammati',
    email: 'sumati@gmai.com',
    secretQuestion: 'favColor',
    answer: 'yellow',
    modeOfContact: 'phone',
  };
  isEditMode = false;
  secretQuestion!: string;
  secretAnswer!: string;
  isSubscribe!: boolean;
  modeOfContact: any;
  ngOnInit(): void {
    // setTimeout(() => {
    //   console.log(this.signUpForm);
    // }, 0);
  }
  onSubmit() {
    if (this.signUpForm.valid) {
      console.log(this.signUpForm.value);
      this.signUpForm.reset();
    }
  }
  patchData() {
    this.signUpForm.form.patchValue(this.userDetails);
  }
}
