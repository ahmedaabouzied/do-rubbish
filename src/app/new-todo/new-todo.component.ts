import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss']
})
export class NewTodoComponent implements OnInit {
  note: string;
  constructor(private todoservice: TodoService, private router: Router) { }

  ngOnInit() {
  }
  save(note: string) {
    this.todoservice.save(note).then((msg) => {
      this.router.navigate(['/']);
    }).catch((error) => { console.log(error) })
  }
}
