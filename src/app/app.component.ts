import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponentComponent } from './test-component/test-component.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataFormComponent } from "./FormComponents/data-form/data-form.component";
import { ViewPersonsComponent } from "./FormComponents/view-persons/view-persons.component";
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, TestComponentComponent, CommonModule, FormsModule, DataFormComponent, ViewPersonsComponent]
})
export class AppComponent {
  title = 'FormApplicationAngular';
}
