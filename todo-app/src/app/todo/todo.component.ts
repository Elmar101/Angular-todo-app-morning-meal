import { Component, OnInit } from '@angular/core';
import { Model } from '../models/staticData';
import { TodoItem } from '../models/todoItem';

interface ITODO_ITEMS {
  id: number;
  description: string;
  action: string;
}
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  message: string = ""
  model = new Model();
  private name: string = "Elmar";
  
  public get getName() : string {
    return this.model.name; 
  }
  public get getItems(): TodoItem[]  {
    return this.model.items;
  }
  
  ngOnInit(): void {
  }

  public addToList(input: HTMLInputElement){
    input.value && (this.message = input.value); 
    input.value ="";
  }
}
