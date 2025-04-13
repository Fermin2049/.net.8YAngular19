import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProducListComponent } from './products/components/produc-list/produc-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Crud-curso';
}
