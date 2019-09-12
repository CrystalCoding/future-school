import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SchoolListComponent } from './school-list/school-list.component';
import { SchoolCardComponent } from './school-card/school-card.component';
import { SchoolService } from './Core/school.service';
import { CreateSchoolComponent } from './create-school/create-school.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './User/login/login.component'
import { StudentModule } from './Student/student.module';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SchoolModule } from './School/school.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SchoolListComponent,
    SchoolCardComponent,
    CreateSchoolComponent,
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
    SchoolModule
  ],
  providers: [SchoolService],
  bootstrap: [AppComponent]
})
export class AppModule { }
