import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  todolist;
  constructor(
    private todoService: TodoService,
    private router: Router
    ) { }

  ngOnInit() {
    this.todolist = this.getTodos();
  }
  edit(i: Number) {
    this.router.navigate(['/edit',i])
  }
  refreshTodos(): void {
    this.todolist = this.getTodos();
  }
  getTodos(): Array<String> {
    return this.todoService.getTodos();
  }
  saveTodo(todo: string) {
    return this.todoService.save(todo);
  }
  removeTodo(todo: string) {
    this.todoService.removeTodo(todo).then((msg) => {
      console.log(msg);
      this.refreshTodos();
    }).catch((error) => console.error(error));
  }
  updateTodo(i: number, now: string) {
    this.todoService.updateTodo(i, now).then((msg) => {
      console.log(msg);
      this.refreshTodos();
    }).catch((error) => {
      console.error(error);
    })
  }
}
