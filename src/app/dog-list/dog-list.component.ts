import { Component } from '@angular/core';
import { Dog } from './Dog';

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.scss']
})
export class DogListComponent {
  dogs: Dog[] = [
    {
      name: 'Nica',
      age: '4 meses',
      gender: 'hembra',
      size: 'pequeña',
      castrated: 'sí',
      rescuer: 'Proyecto 4 Patas',
      link: 'https://www.instagram.com/proyecto4patas/',
      image: 'assets/img/adoptions/nica.jpeg'
    },
    {
      name: 'Severino',
      age: '5 meses',
      gender: 'macho',
      size: 'mediano',
      castrated: 'sí',
      rescuer: 'Danos Una Patas',
      link: 'https://www.instagram.com/danosunapatamdp/',
      image: 'assets/img/adoptions/severino.jpg'
    },
    {
      name: 'Josecito',
      age: '6 meses',
      gender: 'macho',
      size: 'mediano',
      castrated: 'sí',
      rescuer: 'Danu Colombo',
      link: 'https://www.instagram.com/danumdp/',
      image: 'assets/img/adoptions/josecito.jpg'
    }
  ];
}
