import { Component, } from '@angular/core';
import { Person } from '../../Models/Person.model';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Observable, Subscribable, Subscription, take } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-data-form',
  standalone: true,
  imports: [FormsModule, HttpClientModule, AsyncPipe, CommonModule, ReactiveFormsModule],
  templateUrl: './data-form.component.html',
  styleUrl: './data-form.component.css'
})
export class DataFormComponent {


  personForm = new FormGroup({
    name: new FormControl<string>('', Validators.required),
    company: new FormControl<string>(''),
    phone: new FormControl<string>(""),
    email: new FormControl<string>(""),
    reasonForContact: new FormControl<string>(""),
    moreDetails: new FormControl<string>(""),
  });

  constructor(private http: HttpClient, private route: ActivatedRoute) {

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

    this.http.post("https://localhost:7070/api/Persons/AddPerson", testperson).subscribe({
      next: (value) => {
        console.log("added")

      }
    });
    let count = 0;
    let internalSubscribe: Subscription;




    let customeObserver = new Observable<any>((observer) => {

      setInterval(() => {
        count++;
        observer.next(count);
        if (count > 4) {
          observer.error("value greater than 3");
        }
        if (count > 3) {
          observer.complete();
        }
      }, 1000)
    },

    );
    internalSubscribe = customeObserver.subscribe(data => {
      console.log("internal observe", data);
    },

      error => {
        console.log("error", error);
      },
      () => {
        console.log("completed");
      });

    //the function that is called when the Observable is initially subscribed to. This function is given a Subscriber, 
    //to which new values can be nexted,
    // or an error method can be called to raise an error, or complete can be called to notify of a successful completion





    setTimeout(() => {
      console.log("unsubscribe observe",);
      internalSubscribe.unsubscribe();
    }, 5000);




  }




}
