import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { NoticeComponent } from './notice/notice.component';
import { MarksComponent } from './marks/marks.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { SalaryComponent } from './salary/salary.component';
import { LeavesComponent } from './leaves/leaves.component';
import { ExamsComponent } from './exams/exams.component';
import { TeacherhomeComponent } from './teacherhome/teacherhome.component';


const routes: Routes = [
  { path : "" , component : TeacherhomeComponent , 
  children : [
  { path : "Profile" , component : ProfileComponent},
  { path : "Schedule" , component : ScheduleComponent},
  { path : "Notice" , component : NoticeComponent},
  { path : "Exams" , component : ExamsComponent},
  { path : "Marks" , component : MarksComponent},
  { path : "Assignments" , component : AssignmentsComponent},
  { path : "Salary" , component : SalaryComponent},
  { path : "Leaves" , component : LeavesComponent}  
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
