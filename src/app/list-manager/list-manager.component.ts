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
      <li *ngFor="let item of todoList">
        <hillel-todo-item [todoItem]="item"></hillel-todo-item>
      </li>
      
      <li *ngFor="let item of list">{{item.name}}</li>
      
    </ul>
    <h1 *ngIf="userLoggedIn">Welcome!</h1>
  `,
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {
  private title: string = 'My Todos!';
  private todoList = [];
  list = [
    {name: "Hello"},
    {name: "World"},
    {name: "opm"}
    ];
  addItem(title:string) {
    this.todoList.push({title});
    console.log(title);
  }
  constructor(private todoListService:TodoListService) {}

  ngOnInit() {
    this.todoList = this.todoListService.getTodoList();
  }

}
