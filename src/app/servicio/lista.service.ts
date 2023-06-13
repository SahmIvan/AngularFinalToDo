import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListaService {
  url = 'http://localhost:3000';
  private todos: any[] = [];
  constructor() {}

  async getTasks() {
    return fetch(`${this.url}/todos`).then((res) => res.json());
  }

  async getTask(details: string) {
    const response = await fetch(`${this.url}/todos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(details),
    });

    if (!response.ok) {
      throw new Error('Could not get tasks');
    }

    return response.json;
  }

  async updateTodo(id: string, data: any) {
    const response = await fetch(`${this.url}/todos/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Could not update task');
    }
    const updatedTodo = await response.json();
    const completedStatus = this.getCompletedStatusFromJson(updatedTodo);
    updatedTodo.completed = completedStatus;

    return updatedTodo;
  }

  private getCompletedStatusFromJson(todo: any): boolean {
    return todo.completed == true;
  }
}
