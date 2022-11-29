import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Dog } from '../dog-list/Dog';
import { FormListService } from '../form-list.service';

@Component({
  selector: 'app-dog-form',
  templateUrl: './dog-form.component.html',
  styleUrls: ['./dog-form.component.scss']
})
export class DogFormComponent {
  constructor(private table: FormListService){}

  name: string = "";

  age: string = "";

  addDogToTable(): void {
    this.table.addToTable(
      {name: this.name, age: this.age}
    );
  }
}
