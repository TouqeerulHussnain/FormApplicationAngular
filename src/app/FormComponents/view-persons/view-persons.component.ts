
import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs/internal/firstValueFrom';
import { Person } from '../../Models/Person.model';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-persons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-persons.component.html',
  styleUrl: './view-persons.component.css'
})
export class ViewPersonsComponent implements OnInit {

  person: Person[] = [];
  constructor(private http: HttpClient) {

  }
  async ngOnInit(): Promise<void> {
    console.log("init called")
    this.person = await this.getContacts();
    console.log(this.person);
  }







  private async getContacts(): Promise<Person[]> {
    return await firstValueFrom(this.http.get<Person[]>("https://localhost:7070/api/Persons/GetAllContacts"));
  }
}
