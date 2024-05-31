import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from "../home/services/auth.service";
import AuthData from "../home/models/auth-data.model"


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  Loading = false;
  errorMessage: string = "";
  isSucceed = false;

  onSignup(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const authData: AuthData = form.value
    this.authService.createUser(authData)
      .subscribe(data => {
        this.errorMessage = "";
        this.isSucceed = true;
      },
        error => { this.errorMessage = error.error.msg; });
  }


  constructor(public authService: AuthService) { }

  ngOnInit(): void { }

}
