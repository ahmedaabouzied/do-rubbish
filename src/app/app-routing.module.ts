import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewTodoComponent } from './new-todo/new-todo.component';
import { ListComponent } from './list/list.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
const routes: Routes = [
  { path: 'new', component: NewTodoComponent },
  { path: 'edit/:id', component: EditTodoComponent },
  { path: '', component: ListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
