import { Component, OnInit } from '@angular/core';
import { School } from '../Models/school.model';
import { SchoolService } from '../Core/school.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-school',
  templateUrl: './create-school.component.html',
  styleUrls: ['./create-school.component.css']
})
export class CreateSchoolComponent implements OnInit {

  private newSchool : School;
  private addSchoolForm : FormGroup;

  constructor(private schoolService : SchoolService,
              private _fb : FormBuilder) { }

  ngOnInit() {
    this.addSchoolForm = this._fb.group({
      id : [''],
      name : [''],
      address : [''],
      contact : [''],
      rating : [''],
      review : ['']
    });
  }

  public addSchool(formValues) {
    this.schoolService.addSchool(formValues);
  }

}
