import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from "../home/services/auth.service";
import AuthData from "../home/models/auth-data.model"
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage: string = "";



  constructor(public authservice: AuthService, private router: Router) { }


  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const authData: AuthData = form.value
    this.authservice.loginUser(authData)
      .subscribe(data => {
        this.errorMessage = "";
        localStorage.setItem('token', data.accessToken);  // const token = localStorage.setItem('token');
        this.router.navigate(['/']);
      },
        error => { this.errorMessage = "Username or password is not correct" });

  }

  ngOnInit(): void {
  }

}
