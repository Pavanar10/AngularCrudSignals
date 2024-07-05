import { Component, effect } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  todos:any[]=[];

  constructor(private todoService:TodoService){
    effect(() => {
      this.todos = this.todoService.todos();
    });
  }

  getTodos(){
    this.todos = this.todoService.todos();
    console.log("todos",this.todos)
  }
  ngOnInit(){
    this.todoService.fetchTodos();
  }

}
