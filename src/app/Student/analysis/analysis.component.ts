import {Component, ElementRef, AfterViewInit} from '@angular/core';
import * as Chart from 'chart.js';


@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent implements AfterViewInit {
  chart1: any = [];
  chart2: any  = [];
  chart3: any  = [];
  chart4: any  = [];
  noOfCharts = [1, 2, 3, 4, 5];
  ctx: any;
  htmlRef1: any;
  htmlRef2: any;
  private ctx2: any;
  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit() {
    const currentYearMarks = [70, 30 , 90];
    const lastYearMarks = [30, 80 , 50];
    const terms = ['Term-1', 'Term-2', 'Term-3'];
    // this.htmlRef1 = this.elementRef.nativeElement.querySelector(`canvas-1`);
    this.htmlRef1 = document.getElementById('canvas-1')
    this.ctx = this.htmlRef1.getContext('2d');
    this.chart1 = new Chart(this.ctx, {
      type: 'line',
      data: {
        labels: terms,
        datasets: [
          {
            data: currentYearMarks,
            borderColor: '#3cba9f',
            fill: false
          },
          {
            data: lastYearMarks,
            borderColor: '#ffcc00',
            fill: false
          },
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });
    this.htmlRef2 = document.getElementById('canvas-2')
    this.ctx2 = this.htmlRef2.getContext('2d');
    this.chart2 = new Chart(this.ctx2, {
      type: 'line',
      data: {
        labels: terms,
        datasets: [
          {
            data: currentYearMarks,
            borderColor: '#3cba9f',
            fill: false
          },
          {
            data: lastYearMarks,
            borderColor: '#ffcc00',
            fill: false
          },
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });
    // const htmlRef3 = this.elementRef.nativeElement.querySelector(`canvas-3`);
    // this.chart3 = new Chart(htmlRef3, {
    //   type: 'line',
    //   data: {
    //     labels: terms,
    //     datasets: [
    //       {
    //         data: currentYearMarks,
    //         borderColor: '#3cba9f',
    //         fill: false
    //       },
    //       {
    //         data: lastYearMarks,
    //         borderColor: '#ffcc00',
    //         fill: false
    //       },
    //     ]
    //   },
    //   options: {
    //     legend: {
    //       display: false
    //     },
    //     scales: {
    //       xAxes: [{
    //         display: true
    //       }],
    //       yAxes: [{
    //         display: true
    //       }],
    //     }
    //   }
    // });
    // const htmlRef4 = this.elementRef.nativeElement.querySelector(`canvas-4`);
    // this.chart4 = new Chart(htmlRef4, {
    //   type: 'line',
    //   data: {
    //     labels: terms,
    //     datasets: [
    //       {
    //         data: currentYearMarks,
    //         borderColor: '#3cba9f',
    //         fill: false
    //       },
    //       {
    //         data: lastYearMarks,
    //         borderColor: '#ffcc00',
    //         fill: false
    //       },
    //     ]
    //   },
    //   options: {
    //     legend: {
    //       display: false
    //     },
    //     scales: {
    //       xAxes: [{
    //         display: true
    //       }],
    //       yAxes: [{
    //         display: true
    //       }],
    //     }
    //   }
    // });
  }

}
