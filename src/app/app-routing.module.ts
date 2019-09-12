import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SchoolListComponent } from './school-list/school-list.component';
import { LoginComponent } from './User/login/login.component';


const routes: Routes = [
  { path : "" , component : HomeComponent},
  { path : "user/login" , component : LoginComponent},
  { path : "school-list" , component : SchoolListComponent},
  { path : "student" , loadChildren : () => import(`./Student/student.module`).then(m => m.StudentModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
