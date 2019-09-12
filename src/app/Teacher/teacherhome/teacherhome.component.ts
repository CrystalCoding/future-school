import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teacherhome',
  templateUrl: './teacherhome.component.html',
  styleUrls: ['./teacherhome.component.css']
})
export class TeacherhomeComponent implements OnInit {

  mobileQuery: MediaQueryList;
  navList : string[] = ['Profile', 'Schedule', 'Notice','Exams','Marks','Assignments','Salary','Leaves'];
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private _router :Router, private _route : ActivatedRoute) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
   }

   onNavSelect( navItem : string) :void {
    this._router.navigate([navItem],{relativeTo: this._route});
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
