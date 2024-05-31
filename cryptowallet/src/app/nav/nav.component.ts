import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthService } from "../home/services/auth.service";



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  show = true;
  route: string = "";


  constructor(private router: Router, location: Location, public authservice: AuthService) {


    router.events.subscribe((val) => {
      if (location.path() != '') {
        this.route = location.path();
        this.show = false;
      } else {
        this.route = 'Home';
        this.show = true;

      }

    });

  }

  ngOnInit(): void {
  }

  logout() {
    this.authservice.removeToken();
    this.router.navigate(['/login']);
  }



}
