import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchoolHomeComponent } from './schoolhome/schoolhome.component';
import { ProfileComponent } from './profile/profile.component';
import { TimetableComponent } from './timetable/timetable.component';
import { NoticeComponent } from './notice/notice.component';
import { ExamsComponent } from './exams/exams.component';
import { MarksComponent } from './marks/marks.component';
import { EventsComponent } from './events/events.component';


const routes: Routes = [
  { path : "" , component : SchoolHomeComponent , 
    children : [
    { path : "Profile" , component : ProfileComponent},
    { path : "Timetable" , component : TimetableComponent},
    { path : "Notice" , component : NoticeComponent},
    { path : "Exams" , component : ExamsComponent},
    { path : "Marks" , component : MarksComponent},
    { path : "Events" , component : EventsComponent},
    { path : "Students" , component : ExamsComponent} 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolRoutingModule { }
