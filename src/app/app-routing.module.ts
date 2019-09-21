import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './User/login/login.component';


const routes: Routes = [
  { path : '' , redirectTo: 'home', pathMatch: 'full'},
  { path : 'home' , component : HomeComponent},
  { path : 'user/login' , component : LoginComponent},
  { path : 'student' , loadChildren : () => import(`./Student/student.module`).then(m => m.StudentModule) },
  { path : 'school' , loadChildren : () => import(`./School/school.module`).then(m => m.SchoolModule) },
  { path : 'teacher' , loadChildren : () => import(`./teacher/teacher.module`).then(m => m.TeacherModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
