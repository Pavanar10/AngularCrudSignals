import { Component, effect } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  todos = this.todoService.todos;
  error=this.todoService.error;

  constructor(private todoService:TodoService){
    effect(() => {
      this.todos = this.todoService.todos;
      this.error = this.todoService.error;
    });
  }

  ngOnInit(){
    this.todoService.fetchTodos();
  }
  deleteTodo(id:number){
    this.todoService.deleteTodo(id);
  }

}
