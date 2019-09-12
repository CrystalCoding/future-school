import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentHomeComponent } from './studenthome/studenthome.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ExamComponent } from './exam/exam.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { NoticesComponent } from './notices/notices.component';
import { StudentRoutingModule } from './student-routing.module';
import { AngularMaterialModule } from '../angular-material/angular-material.module';



@NgModule({
  declarations: [
    StudentHomeComponent,
    ScheduleComponent,
    ExamComponent,
    AssignmentsComponent,
    NoticesComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    AngularMaterialModule
  ]
})
export class StudentModule { }
