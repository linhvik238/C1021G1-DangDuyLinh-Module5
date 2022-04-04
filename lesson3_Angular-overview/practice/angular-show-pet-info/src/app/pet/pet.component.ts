import { Component, OnInit } from '@angular/core';
import {Pet} from '../pet';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
  pet: Pet = {
    name: 'puppie',
    image: 'https://petshopsaigon.vn/wp-content/uploads/2020/08/cac-loai-cho-husky-31.jpg'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
