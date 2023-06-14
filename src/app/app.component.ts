import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Guid } from 'guid-typescript';
import { IList } from './interface/todo.interface';
import { ListaService } from './servicio/lista.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tasks: IList[] = [];
isCompleted: boolean = false;

  form: FormGroup = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]),
    deadline: new FormControl('', [
      Validators.required,
    ]),
  });

  constructor( private taskService: ListaService){
    this.taskService.getTasks().then((tasks) => (this.tasks = tasks));
  }

  async validar() {

    if (this.form.valid) {
      await this.taskService.getTask(this.form.value);
      await this.taskService.getTasks().then((tasks) => (this.tasks = tasks));



    } else {
      alert('Porfavor llenar todos los campos');
    }
  }

}
