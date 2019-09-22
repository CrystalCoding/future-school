import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }
  username: string;
  password: string;
  ngOnInit() {
  }
  login(): void {
    // tslint:disable-next-line:triple-equals
    if(this.username == 'admin' && this.password == 'admin'){
      this.router.navigate(['/student']);
    } else {
      alert('Invalid credentials');
    }
  }
}
