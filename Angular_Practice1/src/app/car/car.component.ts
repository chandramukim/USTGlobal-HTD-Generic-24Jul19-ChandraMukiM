import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  car: any = " ";
  cars = [
    {
      img: 'https://cdn.pixabay.com/photo/2015/01/19/13/51/car-604019__340.jpg',
      title: 'Audi',
      description: 'Good old audi'
    },
    {
      img: 'https://cdn.pixabay.com/photo/2019/01/09/06/50/car-3922692__340.jpg',
      title: 'Lamborgini',
      description: 'Good Red lambo'
    },
    {
      img: 'https://cdn.pixabay.com/photo/2015/09/02/12/25/bmw-918408__340.jpg',
      title: 'BMW',
      description: 'Good Black BMW'
    }
  ]

  sendCar(c) {
    this.car = c;
  }
  constructor() { }

  ngOnInit() {
  }

}
