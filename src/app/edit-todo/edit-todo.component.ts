import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { TodoService } from '../todo.service';
'../todoService'
@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss']
})
export class EditTodoComponent implements OnInit {

  constructor(private route: ActivatedRoute, private todoService: TodoService, private router: Router) { }
  id;
  todo;
  ngOnInit() {
    this.id = this.route.snapshot.params.id; console.log(this.route.snapshot.params.id);
    this.todo = this.todoService.getArray()[this.id];
  }
  save(todo) {
    this.todoService.updateTodo(this.id, todo).then((msg) => {
      this.router.navigate(['/'])
    })
  }
}
