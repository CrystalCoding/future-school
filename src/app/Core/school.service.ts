import { Injectable } from '@angular/core';
import { School } from '../Models/school.model';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor() { }

  public getListOfSchools() : School[] {
    return this.listOfSchools;
  }

  public addSchool( school: School) : void {
    this.listOfSchools.push(school);
  }

  private listOfSchools : School [] = [{
    id : 1,
    name : "St. Francis' College",
    address : "HazratGanj",
    contact : "123456",
    level : "Post Secondary",
    rating : "5/5",
    reviews : "Amazing college !!"
  },
  {
    id : 2,
    name : "Delhi Public School ",
    address : "HazratGanj",
    contact : "123456",
    level : "Post Secondary",
    rating : "5/5",
    reviews : "Amazing college !!"
  },
  {
    id : 3,
    name : "City Montersery School",
    address : "HazratGanj",
    contact : "123456",
    level : "Post Secondary",
    rating : "5/5",
    reviews : "Amazing college !!"
  }
];
}
