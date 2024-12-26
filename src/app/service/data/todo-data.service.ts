import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private httpClient: HttpClient
  ) { }

  // retrieving data from backend through url in json format
  retrieveAllTodos(username: string){
    return this.httpClient.get<Todo[]>(`https://my-todo-app-siki-39282cb92d7a.herokuapp.com/jpa/users/${username}/todos`);
    // console.log("Execute Hello World Bean Service")
  }

  // retrieving data from backend through url in json format
  retrieveTodo(username: string, id: number){
    return this.httpClient.get<Todo>(`https://my-todo-app-siki-39282cb92d7a.herokuapp.com/jpa/users/${username}/todos/${id}`);
  }

  // Delete a todo item by its ID for a specific username
  deleteTodo(username: string, id: number){
    return this.httpClient.delete(`https://my-todo-app-siki-39282cb92d7a.herokuapp.com/jpa/users/${username}/todos/${id}`);
  }

  // Update a todo item for a specific username
  updateTodo(username: string, id: number, todo: Todo) {
    return this.httpClient.put(`https://my-todo-app-siki-39282cb92d7a.herokuapp.com/jpa/users/${username}/todos/${id}`, todo);
  }

  // Create a new todo item for a specific username
  createTodo(username: string, todo: Todo) {
    return this.httpClient.post(`https://my-todo-app-siki-39282cb92d7a.herokuapp.com/jpa/users/${username}/todos`, todo);
  }

}
