import { PersonsService } from './persons.service';
import { Component } from "@angular/core";

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']
})

export class PersonInputComponent {
  enteredPersonName = '';

  constructor(private personService: PersonsService){}

  onCreatePerson() {
    console.log('Created a Person ' + this.enteredPersonName);
    this.personService.addPerson(this.enteredPersonName);
    this.enteredPersonName = '';
    console.log(this.personService.persons);
  }
}
