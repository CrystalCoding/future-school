import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SchoolService } from './Core/school.service';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './User/login/login.component'
import { StudentModule } from './Student/student.module';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SchoolModule } from './School/school.module';
import { TeacherModule } from './teacher/teacher.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    StudentModule,
    SchoolModule,
    TeacherModule,
    FlexLayoutModule
  ],
  providers: [SchoolService],
  bootstrap: [AppComponent]
})
export class AppModule { }
