import { Output } from '@angular/core';
import { Component, Input, OnInit, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child-item',
  templateUrl: './child-item.component.html',
  styleUrls: ['./child-item.component.css']
})
export class ChildItemComponent implements OnInit {

  @Input() title:string;
  @Output() inc = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
   
  }
  btnClick(n){
    this.inc.emit(n);
    
  }
 

}
