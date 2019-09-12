import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user : User;
  loginForm : FormGroup;

  constructor( private _fb : FormBuilder, private _router :Router) { }

  ngOnInit() {
    this.loginForm = this._fb.group({
      userName : [''],
      password : ['']
    });
  }

  onSubmit() {
    console.log('inside onSubmit');
    this._router.navigate(['/student']);
  }

}
