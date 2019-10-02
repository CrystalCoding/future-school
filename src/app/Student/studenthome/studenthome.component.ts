import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router, ActivatedRoute } from '@angular/router';
import {SchoolService} from '../../Core/school.service';

@Component({
  selector: 'app-studenthome',
  templateUrl: './studenthome.component.html',
  styleUrls: ['./studenthome.component.css']
})
export class StudentHomeComponent {

  mobileQuery: MediaQueryList;
  navList: string[] = ['Schedule', 'Exams', 'Assignments', 'Notice'];
  iconList: string[] = ['schedule', 'assessment', 'assignment', 'announcement'];
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef,
              media: MediaMatcher,
              private _router :Router,
              private _route : ActivatedRoute,
              private schoolService: SchoolService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.schoolService.getStudents().subscribe(
      data => console.log(data)
    );
   }

  onNavSelect( navItem : string) :void {
    this._router.navigate([navItem],{relativeTo: this._route});
  }

  navigateToHome() : void {
    this._router.navigate(['']);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
