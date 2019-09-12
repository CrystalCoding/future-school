import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-schoolhome',
  templateUrl: './schoolhome.component.html',
  styleUrls: ['./schoolhome.component.css']
})
export class SchoolHomeComponent implements OnInit {

  mobileQuery: MediaQueryList;
  navList : string[] = ['Profile', 'Timetable', 'Notice','Exams','Marks','Events','Students'];
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
