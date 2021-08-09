import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  title = "My Title"
  
  value: number =0;

  constructor() { }

  ngOnInit(): void {
  }

  incBy(event){
    console.log(event)
     this.value += event;
  }

}
