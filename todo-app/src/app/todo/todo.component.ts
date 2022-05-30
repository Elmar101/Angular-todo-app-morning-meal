import { Component, OnInit } from '@angular/core';

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
  private name: string = "Elmar";
  
  public get getName() : string {
    return this.name; 
  }
  items: ITODO_ITEMS[] = [
    {id: 1 , description: 'Seher Yemeyi', action: 'he'},
    {id: 2 , description: 'Seher Bazarliqi', action: 'he'},
    {id: 3 , description: 'Seher Idmani', action: 'yox'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
