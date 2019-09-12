import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolRoutingModule } from './school-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { TimetableComponent } from './timetable/timetable.component';
import { NoticeComponent } from './notice/notice.component';
import { ExamsComponent } from './exams/exams.component';
import { StudentsComponent } from './students/students.component';
import { MarksComponent } from './marks/marks.component';
import { EventsComponent } from './events/events.component';
import { SchoolHomeComponent } from './schoolhome/schoolhome.component';
import { AngularMaterialModule } from './angular-material.module';


@NgModule({
  declarations: [ProfileComponent, TimetableComponent, NoticeComponent, ExamsComponent, StudentsComponent, MarksComponent, EventsComponent, SchoolHomeComponent],
  imports: [
    CommonModule,
    SchoolRoutingModule,
    AngularMaterialModule
  ]
})
export class SchoolModule { }
