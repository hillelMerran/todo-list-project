import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'hillel-todo-input',
  template: `
    <input (keyup.enter)="changeTitle($event.target.value)" #myInput>
    <button (click)="changeTitle(myInput.value)">
      Save
    </button>
  `,
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Output() submit:EventEmitter<string> = new EventEmitter();
  private title: string = 'My First ToDo Title !!!';

  constructor() {}

  changeTitle(newTitle:string): void {
    this.submit.emit(newTitle);
  }

  ngOnInit() {
  }
}
