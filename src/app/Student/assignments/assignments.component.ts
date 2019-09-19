import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface UserData {
  CourseId: string;
  Course: string;
  Date: string;
  Location: string;
}

/** Constants used to fill up our data base. */
const DATES: string[] = [
  'Hall-1', 'Hall-2', 'Hall-3', 'Hall-4', 'Hall-5', 'Hall-6', 'Hall-7', 'Hall-8', 'Hall-9', 'Hall-10',
  'Hall-11', 'Hall-12', 'Hall-13'
];
const COURSES: string[] = [
  'Maths', 'Chemistry', 'Biology', 'Civics', 'History', 'English', 'Hindi', 'Geography', 'GK', 'Sanskrit',
  'Arts', 'Physical', 'Physics'
];
@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  displayedColumns: string[] = ['CourseId', 'Course', 'Date', 'Location'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() {
    // Create 100 users
    const allCourses = Array.from({length: 10}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(allCourses);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

/** Builds and returns a new User. */
function createNewUser(courseId: number): UserData {
  const Course = COURSES[Math.round(Math.random() * (COURSES.length - 1))];

  return {
    CourseId: courseId.toString(),
    Course: Course,
    Date: '10/10/10',
    Location: DATES[Math.round(Math.random() * (DATES.length - 1))]
  };
  

}
