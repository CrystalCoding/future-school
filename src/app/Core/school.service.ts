import { Injectable } from '@angular/core';
import { School } from '../Models/school.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {
  private studentUrl = 'http://localhost:4050/students';

  constructor( private http: HttpClient) { }
  getStudents(): any {
    return this.http.get(this.studentUrl);
  }


}
