// login.component.ts
import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  showSpinner: boolean = false;

  constructor(private authservice: AuthService, private fb: FormBuilder, private router: Router) {}

  login() {
    // Set showSpinner to true to display the spinner
    this.showSpinner = true;

    let user = this.authservice.login(this.form.value.username, this.form.value.password);

    console.log("Login started");

    // Using RxJS timer to handle the 5-second delay
    timer(5000).subscribe(() => {
      // Reset the form and hide the spinner once login is complete
      this.form.reset();
      this.showSpinner = false;
      console.log("Login stopped after 5 seconds");

      if (!user) {
        alert("Invalid username or password");
      } else {
        this.router.navigate(['/admin']);
      }
    });
  }
}
