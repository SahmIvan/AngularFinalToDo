import { Component, Input } from '@angular/core';
import { IList } from 'src/app/interface/todo.interface';
import { ListaService } from 'src/app/servicio/lista.service';

@Component({
  selector: 'app-completo',
  templateUrl: './completo.component.html',
  styleUrls: ['./completo.component.scss']
})
export class CompletoComponent {
  @Input() task!: IList;
  @Input() done!: boolean;
}


