import { Component, Input } from '@angular/core';
import { Guid } from 'guid-typescript';
import { IList } from 'src/app/interface/todo.interface';
import { ListaService } from 'src/app/servicio/lista.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss']
})
export class TareasComponent {
  @Input() task!: IList;
  @Input() done!: boolean;

  constructor(private todoService: ListaService) { }

  async updateTodoItem(id: string, data: any) {
    const updated = this.todoService.updateTodo(id, data);
    if (!updated) {
      console.error('Todo not found');

      // Handle the success or perform any additional actions
    }
    console.log('Todo updated successfully');
      // Handle the case where the todo with the given id is not found
}
}
