import { Component } from '@angular/core';
import { Dog } from '../dog-list/Dog';
import { FormListService } from '../form-list.service';

@Component({
  selector: 'app-adoptions',
  templateUrl: './adoptions.component.html',
  styleUrls: ['./adoptions.component.scss']
})
export class AdoptionsComponent {
  dog!: Dog;

  constructor(){
  }

  dogAdded(message: string){
    alert(message);
  }
}
