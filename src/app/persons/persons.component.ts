import { PersonsService } from './persons.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html'
})
export class PersonsComponent implements OnInit, OnDestroy {
  personList: string[];
  private personListSubs: Subscription;
  isFetching = false;

  constructor(private personService: PersonsService) {
  }

  ngOnInit() {
    this.personService.fetchPersons();
    this.isFetching = true;
    this.personListSubs = this.personService.personsChanged.subscribe(persons => {
      this.personList = persons;
      this.isFetching = false
    });
  }

  onRemovePerson(personName: string) {
    this.personService.removePerson(personName);
  }

  ngOnDestroy() {
    this.personListSubs.unsubscribe();
  }
}
