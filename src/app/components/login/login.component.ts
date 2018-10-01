import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  invalidError: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
    console.log('login component init');
  }

  login() {
    if (this.username === "admin" && this.password === "admin") {
      this.router.navigate(['/homelayout'])
    } else {
      this.invalidError = true;
    }
  }

}
