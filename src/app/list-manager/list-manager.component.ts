import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'hillel-todo-list-manager',
  template: `
    <h1>
      {{title}}
    </h1>
    <hillel-todo-input (submit)="addItem($event)"></hillel-todo-input>
    <ul>
      
      <li *ngFor="let item of list">{{item.name}}</li>
      
      <li *ngFor="let item of todoList">
        <hillel-todo-item [todoItem]="item"></hillel-todo-item>
      </li>
      
    </ul>
    <h1 *ngIf="userLoggedIn">Welcome!</h1>
  `,
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {
  private title: string = 'Hillel\'s Todo list!';
  private todoList = [];
  list = [
    {name: "931112874"},
    {name: "Hillel"},
    {name: "Merran"}
    ];
  addItem(title:string) {
    this.todoList.push({title});
    console.log(this.todoList);
  }
  constructor(private todoListService:TodoListService) {}

  ngOnInit() {
    this.todoList = this.todoListService.getTodoList();
  }

}
