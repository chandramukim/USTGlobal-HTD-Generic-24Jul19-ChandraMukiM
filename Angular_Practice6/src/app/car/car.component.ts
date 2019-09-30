import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  carData: any = '';

  cars = [
    {
      brand:'Ferrari',
      img:'https://cdn.pixabay.com/photo/2014/09/07/22/34/car-race-438467__340.jpg',
      description:'Ferrari  is an Italian luxury sports car manufacturer based in Maranello. Founded by Enzo Ferrari in 1939 out of Alfa Romeos race division as Auto Avio Costruzioni the company built its first car in 1940 in 2014 Ferrari was rated the worlds most powerful brand by Brand Finance'
    },
    {
      brand:'Audi',
      img:'https://cdn.pixabay.com/photo/2016/12/07/21/50/audi-1890494__340.jpg',
      description:'The company name is based on the Latin translation of the surname of the founder, August Horch. "Horch", meaning "listen" in German, becomes "audi" in Latin. The four rings of the Audi logo each represent one of four car companies that banded together to create Audis predecessor company, Auto Union'
    },
    {
      brand:'BMW',
      img:'https://cdn.pixabay.com/photo/2015/05/15/14/46/bmw-768688__340.jpg',
      description:'BMW (German pronunciation: [ˈbeːˈʔɛmˈveː] ( listen)) is a German multinational company which produces automobiles and motorcycles. The company was founded in 1916 as a manufacturer of aircraft engines, which it produced from 1917 until 1918 and again from 1933 to 1945.'
    },
    {
      brand:'FIAT',
      img:'https://image.shutterstock.com/image-photo/lonely-red-car-waiting-his-260nw-562818475.jpg',
      description:'Fiat Automobiles is the largest automobile manufacturer in Italy.During its more than century-long history it remained the largest automobile manufacturer in Europe and the third in the world after General Motors and Ford for over twenty years until the car industry crisis in the late 1980s.In 2013, Fiat S.p.A. was the second largest European automaker by volumes produced and the seventh in the world, while currently FCA is the world eighth largest auto maker.'
    },
    {
      brand:'Ford',
      img:'https://cdn.pixabay.com/photo/2016/05/06/16/32/car-1376190__340.jpg',
      description:'Ford Motor Company is an American multinational automaker that has its main headquarters in Dearborn, Michigan, a suburb of Detroit. It was founded by Henry Ford and incorporated on June 16, 1903. The company sells automobiles and commercial vehicles under the Ford brand and most luxury cars under the Lincoln brand.'
    },
    {
      brand:'Honda',
      img:'https://cdn.pixabay.com/photo/2016/04/20/17/26/honda-1341584__340.jpg',
      description:'Honda Motor Co., Ltd. (Honda), incorporated on September 24, 1948, develops, manufactures and markets motorcycles, automobiles and power products across the world. The Companys segments include Motorcycle Business, Automobile business, Financial services business, and Power product and other businesses.'
    },
    {
      brand:'Renault',
      img:'https://cdn.pixabay.com/photo/2016/09/15/12/12/renault-1671405__340.jpg',
      description:'It is a French multinational automobile manufacturer established in 1899.[8] The company produces a range of cars and vans, and in the past has manufactured trucks, tractors, tanks, buses/coaches, aircraft engines, and autorail vehicles.'
    },
    {
      brand:'Mercedes Benz',
      img:'https://cdn.pixabay.com/photo/2016/07/09/21/47/car-1506922__340.jpg',
      description:'It is a German global automobile marque and a division of Daimler AG. The brand is known for luxury vehicles, buses, coaches, and trucks. The headquarters is in Stuttgart, Baden-Württemberg. The name first appeared in 1926 under Daimler-Benz. In 2018, Mercedes-Benz was the biggest selling premium vehicle brand in the world, having sold 2.31 million passenger cars.'
    },
    {
      brand:'Lamborgini',
      img:'https://cdn.pixabay.com/photo/2019/07/16/03/07/black-4340959__340.jpg',
      description:'It is an Italian brand and manufacturer of luxury sports cars and SUVs based in Sant Agata Bolognese and tractors Lamborghini Trattori in Pieve di Cento, Italy. The company is owned by the Volkswagen Group through its subsidiary Audi.'
    },
    {
      brand:'Toyota',
      img:'https://cdn.pixabay.com/photo/2015/10/01/13/36/car-967011__340.jpg',
      description:'Toyota Motor Corporation (Toyota), incorporated on August 27, 1937, conducts business in the automotive industry. The Company also conducts business in finance and other industries. The Companys segments include Automotive, Financial Services and All Other. Toyota sells its vehicles in approximately 190 countries and regions. Toyotas markets for its automobiles are Japan, North America, Europe and Asia.'
    }
  ];

  sendCar(car) {
    this.carData = car;
  }


  constructor() { }

  ngOnInit() {
  }

}
