import { Component, Input, OnInit } from '@angular/core';
import { Client } from './client.model';

@Component({
  selector: 'app-input-binding',
  templateUrl: './input-binding.component.html',
  styleUrls: ['./input-binding.component.css']
})
export class InputBindingComponent implements OnInit {

  @Input() name:string;
  @Input('otherName') lastName:string;
  @Input() age: number;

  clients: Client[];

  constructor() {
    
   }

  ngOnInit() {
    this.clients =[
      { id: 1, name:'Bob', age: 30},
      {id: 2, name:'Vanessa', age: 30},

    ]

  }

}
