import { Component, Inject, OnInit, inject } from '@angular/core';
import { Person } from '../../Models/Person.model';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, firstValueFrom } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-data-form',
  standalone: true,
  imports: [FormsModule, HttpClientModule, AsyncPipe, CommonModule, ReactiveFormsModule],
  templateUrl: './data-form.component.html',
  styleUrl: './data-form.component.css'
})
export class DataFormComponent {


  personForm = new FormGroup({
    name: new FormControl<string>(''),
    company: new FormControl<string>(''),
    phone: new FormControl<string>(""),
    email: new FormControl<string>(""),
    reasonForContact: new FormControl<string>(""),
    moreDetails: new FormControl<string>(""),
  });

  constructor(private http: HttpClient) {

  }
  public OnSubmitForm() {

    const person = <Person>{
      name: this.personForm.value.name,
      company: this.personForm.value.company,
      email: this.personForm.value.email,
      reasonForContact: this.personForm.value.reasonForContact,
      moreDetails: this.personForm.value.moreDetails,
      phone: this.personForm.value.phone
    }

    const testperson = {
      "name": "2",
      "phone": "string",
      "email": "string",
      "company": "string",
      "reasonForContact": "string",
      "moreDetails": "string"
    }
    console.log("testperson", testperson)
    console.log("person", person)

    this.http.post("https://localhost:7070/api/Persons/AddPerson", person).subscribe({
      next: (value) => {
        console.log("added")

      }
    });
  }




}
