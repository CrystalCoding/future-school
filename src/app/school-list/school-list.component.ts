import { Component, OnInit } from '@angular/core';
import { School } from '../Models/school.model';
import { SchoolService } from '../Core/school.service';

@Component({
  selector: 'app-school-list',
  templateUrl: './school-list.component.html',
  styleUrls: ['./school-list.component.css']
})
export class SchoolListComponent implements OnInit {

  private listOfSchools : School[];

  constructor(private schoolService : SchoolService) { }

  ngOnInit() {
    this.listOfSchools = this.schoolService.getListOfSchools();
  }

  

}
