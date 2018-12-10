import { Component } from '@angular/core';
import { TodoService } from './services/todo.service';
import { Route, RouterModule } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './components/home/home.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

	constructor(public todoService: TodoService) { }
  
}
