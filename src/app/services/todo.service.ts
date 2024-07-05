import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Todo } from '../models/todo';
@Injectable({
  providedIn: 'root'
})


export class TodoService {
todoSignal=signal<Todo[]>([]);
 errorSignal = signal<string | null>(null);
  constructor(private http:HttpClient) { }

  get todos(){
    return this.todoSignal()
  }

  get error(){
    return this.errorSignal()
  }

  //read todo
  fetchTodos():void{
    this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
      .pipe(
        catchError(error=>{
          this.errorSignal.set('Failed to fetch tools');
          return of([])
        })
        ).subscribe((todos)=>this.todoSignal.set(todos));
  }

  updateTodo():void{

  }

  deleteTodo(id:number){
    console.log("delete todo");
    this.todoSignal.update((todo)=>todo.filter((x)=>x.id !=id));
  }

}
