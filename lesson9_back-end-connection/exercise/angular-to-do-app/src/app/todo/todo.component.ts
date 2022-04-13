import { Component, OnInit } from '@angular/core';
import {Todo} from '../model/todo';
import {ToDoService} from '../service/to-do.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

// tslint:disable-next-line:variable-name
let _id = 1;
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoList: Todo[] = [];
  constructor(private service: ToDoService) { }
  content = new FormGroup({
    action: new FormControl('', [Validators.email, Validators.required])
  });
  ngOnInit(): void {
    this.service.getInfo().subscribe((obj) => {
      {
        this.todoList = obj;
      }
    });
  }
  toggleTodo(i: number) {
    this.todoList[i].complete = !this.todoList[i].complete;
  }

  change() {
    const value = this.content.get('action').value;
    if (value) {
      const todo: Todo = {
        id: _id++,
        content: value,
        complete: false
      };
      this.todoList.push(todo);
      this.content.reset();
    }
  }

  delete(id: number) {
    this.service.deleteCategory(id).subscribe(
      () => {
        console.log(`Ok`);
        this.service.getInfo().subscribe((obj) => {
          {
            this.todoList = obj;
          }
        });
      },
      (err) => console.log(err)
    );
  }
}
