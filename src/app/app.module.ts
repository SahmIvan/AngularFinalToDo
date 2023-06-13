import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TareasComponent } from './components/tareas/tareas.component';
import { CompletoComponent } from './components/completo/completo.component';

@NgModule({
  declarations: [
    AppComponent,
    TareasComponent,
    CompletoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
