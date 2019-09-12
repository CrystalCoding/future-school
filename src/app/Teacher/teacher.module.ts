import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { MarksComponent } from './marks/marks.component';
import { NoticeComponent } from './notice/notice.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { SalaryComponent } from './salary/salary.component';
import { LeavesComponent } from './leaves/leaves.component';
import { TeacherhomeComponent } from './teacherhome/teacherhome.component';
import { ExamsComponent } from './exams/exams.component';
import { AngularMaterialModule } from './angular-material.module';


@NgModule({
  declarations: [ProfileComponent, ScheduleComponent, MarksComponent, NoticeComponent, AssignmentsComponent, SalaryComponent, LeavesComponent, TeacherhomeComponent, ExamsComponent],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    AngularMaterialModule
  ]
})
export class TeacherModule { }
