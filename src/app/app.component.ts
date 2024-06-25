import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponentComponent } from './test-component/test-component.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestComponentComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FormApplicationAngular';
}
