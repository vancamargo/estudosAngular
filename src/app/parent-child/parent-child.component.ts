import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TimerComponent } from './timer/timer.component';

@Component({
  selector: 'app-parent-child',
  templateUrl: './parent-child.component.html',
  styleUrls: ['./parent-child.component.css']
})
export class ParentChildComponent implements OnInit {

  @ViewChild("stopTwoWatch")
  myp: ElementRef
  @ViewChild("myP")
  myTimer: TimerComponent;

  constructor() { }

  ngOnInit(): void {
  }

  start(){
    this.myTimer.start();
  }

  stop(){
    this.myTimer.stop();
  }

  clean(){
    this.myTimer.clean();
  }

  ngAfterViewInit(){
    console.log(this.myp)
  }

}
