import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentHomeComponent } from './studenthome/studenthome.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ExamComponent } from './exam/exam.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { NoticesComponent } from './notices/notices.component';

const routes: Routes = [
  { path : "" , component : StudentHomeComponent , 
    children : [
    { path : "Schedule" , component : ScheduleComponent},
    { path : "Exams" , component : ExamComponent},
    { path : "Assignments" , component : AssignmentsComponent},
    { path : "Notice" , component : NoticesComponent} 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
