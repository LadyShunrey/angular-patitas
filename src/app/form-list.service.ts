import { EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Dog } from './dog-list/Dog';

@Injectable({
  providedIn: 'root'
})
export class FormListService {

  _dogList: Dog[] = [];
  dogList: BehaviorSubject<Dog[]> = new BehaviorSubject<Dog[]>([]);

  constructor() { }

  @Output()
  dogAdded: EventEmitter<string> = new EventEmitter<string>();

  addToTable(dog: Dog) {
    this._dogList.push({... dog});
    this.dogAdded.emit("Se agregó este perrito a la tabla");
    console.log(this._dogList);
    this.dogList.next(this._dogList);
  }
}
