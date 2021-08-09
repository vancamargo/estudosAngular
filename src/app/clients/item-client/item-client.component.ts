import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y';
import { EventEmitter, Output } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { Client } from '../client.model';

@Component({
  selector: 'app-item-client',
  templateUrl: './item-client.component.html',
  styleUrls: ['./item-client.component.css']
})
export class ItemClientComponent implements OnInit {

  onEdit: boolean = false;
  @Input() client: Client;
  @Output() updateClient = new EventEmitter<Client>();
  @Output() removeClient = new EventEmitter<any>();
  
  name:string;
  age:number;
  constructor() { }

  ngOnInit(): void {
  }

  edit(){
    this.onEdit = true;
    this.name = this.client.name;
    this.age = this.client.age;
  }

  remove(){
    this.removeClient.emit()
  }

  save(){
    this.onEdit = false;
    this.updateClient.emit(
      {name: this.name, age:this.age}
    );
  }
 
}
