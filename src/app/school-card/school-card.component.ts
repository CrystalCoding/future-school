import { Component, OnInit, Input } from '@angular/core';
import { School } from '../Models/school.model';

@Component({
  selector: 'app-school-card',
  templateUrl: './school-card.component.html',
  styleUrls: ['./school-card.component.css']
})
export class SchoolCardComponent implements OnInit {

  @Input()
  private schoolDetails : School;

  constructor() { }

  ngOnInit() {
  }

}
