import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Dog } from '../dog-list/Dog';
import { FormListService } from '../form-list.service';

@Component({
  selector: 'app-dog-table',
  templateUrl: './dog-table.component.html',
  styleUrls: ['./dog-table.component.scss']
})
export class DogTableComponent {
  dogList$: Observable<Dog[]>;

  constructor(private table: FormListService){
    this.dogList$ = table.dogList.asObservable();
  }
}
