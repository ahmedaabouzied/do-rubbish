import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor() { }
  getArray(): Array<string> | null {
    let listStr: string = window.localStorage.getItem('todos');
    return (listStr === null) ? null : listStr.split(',');
  }
  pushArray(arr: Array<string>) {
    try {
      if (arr.length > 0) {
        let arrStr: string = arr.toString();
        window.localStorage.setItem('todos', arrStr);
      } else {
        window.localStorage.clear();
      }
    } catch (error) {
      console.error('Error pushing array to local storage');
    }
  }
  save(todo: string): Promise<string> {
    return new Promise((resolve, reject) => {
      try {
        let list = this.getArray();
        if (list != null) {
          list.push(todo);
          this.pushArray(list);
          resolve(todo);
        } else {
          window.localStorage.setItem('todos', todo);
          resolve(todo);
        }
      } catch (error) { reject(error) }
    })
  }
  getTodos(): Array<string> {
    let list: Array<string> = this.getArray();
    return list;
  }
  removeTodo(todo: string): Promise<string> {
    return new Promise((resolve, reject) => {
      try {
        let list: Array<string> = this.getArray();
        list.splice(list.indexOf(todo), 1);
        this.pushArray(list);
        resolve(todo);
      } catch (error) {
        reject(error);
      }
    })
  }
  updateTodo(index: number, now: string): Promise<string> {
    return new Promise((resolve, reject) => {
      try {
        let list: Array<string> = this.getArray();
        list[index] = now;
        this.pushArray(list);
        resolve(now);
      } catch (error) { reject(error) }
    })
  }
}
