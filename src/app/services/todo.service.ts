import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';
@Injectable({
  providedIn: 'root'
})


export class TodoService {
todos=signal<Todo[]>([]);
  constructor(private http:HttpClient) { }

  getTodos():Observable<any[]>{
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/todos');
  }

  //read todo
  fetchTodos():void{
  this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
  .subscribe((todos)=>this.todos.set(todos)
    )
    console.log("in service",this.todos)
  }

}
