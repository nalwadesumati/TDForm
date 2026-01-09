import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'TDFORM';
  modeOfContact: any;

  constructor(private snackBar: MatSnackBar) {}

  @ViewChild('signUpForm') signUpForm!: NgForm;

  userDetails = {
    username: 'sumati',
    email: 'sumati@gmail.com',
    secretQuestion: 'favColor',
    answer: 'yellow',
    modeOfContact: 'phone',
  };
  isSignupSuccess = false;
  isEditMode = false;
  secretQuestion!: string;
  secretAnswer!: string;
  isSubscribe!: boolean;

  ngOnInit(): void {}

  onSubmit() {
    if (this.signUpForm.valid) {
      this.snackBar.open('Signup Successful', 'Close', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'center',
      });

      console.log(this.signUpForm.value);
      this.signUpForm.reset();
    }
  }

  patchData() {
    this.signUpForm.form.patchValue(this.userDetails);
  }
}
