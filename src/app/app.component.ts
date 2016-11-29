import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <hillel-todo-list-manager></hillel-todo-list-manager>
    {{ title }} hello {{ 5*20 }}
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private title: string = 'My Todos!';
  private todoList = [];
  addItem(title:string) {
    this.todoList.push({title});
    console.log(title);
  }
}
