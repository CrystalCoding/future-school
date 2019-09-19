import { Component, OnInit } from '@angular/core';

export interface Notice {
  title : string;
  subTitle : string;
  imageUrl : string;
  description : string;
  isRead : boolean;
}

const NOTICES : Notice[] = [
  {
    title : 'School Closing',
  subTitle : 'Date of closing : 10/10/10',
  imageUrl : 'url',
  description : 'School closing due to summer vacation School closing due to summer vacation School closing due to summer vacation School closing due to summer vacation',
  isRead : false
  },
  {
    title : 'School Closing',
  subTitle : 'Date of closing : 10/10/10',
  imageUrl : 'url',
  description : 'School closing due to summer vacation School closing due to summer vacation School closing due to summer vacation School closing due to summer vacation',
  isRead : false
  },
  {
    title : 'School Closing',
  subTitle : 'Date of closing : 10/10/10',
  imageUrl : 'url',
  description : 'School closing due to summer vacation School closing due to summer vacation School closing due to summer vacation School closing due to summer vacation',
  isRead : false
  },
  {
    title : 'School Closing',
  subTitle : 'Date of closing : 10/10/10',
  imageUrl : 'url',
  description : 'School closing due to summer vacation School closing due to summer vacation School closing due to summer vacation School closing due to summer vacation',
  isRead : false
  }
];

@Component({
  selector: 'app-notices',
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.css']
})
export class NoticesComponent implements OnInit {

  notices : Notice[];

  constructor() { 
    this.notices = NOTICES;
  }

  ngOnInit() {
  }

}
