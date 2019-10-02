import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentHomeComponent } from './studenthome/studenthome.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ExamComponent } from './exam/exam.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { NoticesComponent } from './notices/notices.component';
import {AnalysisComponent} from './analysis/analysis.component';

const routes: Routes = [
  { path : '' , redirectTo: 'home', pathMatch: 'full'},
  { path : 'home' , component : StudentHomeComponent,
      children : [
    { path : 'Schedule' , component : ScheduleComponent},
    { path : 'Exams' , component : ExamComponent},
    { path : 'Assignments' , component : AssignmentsComponent},
    { path : 'Notice' , component : NoticesComponent},
    { path : 'Analysis' , component : AnalysisComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
