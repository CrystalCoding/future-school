import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _router : Router) { }

  ngOnInit() {
  }

  viewAllSchools() {
    this._router.navigate(["school-list"]);
  }

}
