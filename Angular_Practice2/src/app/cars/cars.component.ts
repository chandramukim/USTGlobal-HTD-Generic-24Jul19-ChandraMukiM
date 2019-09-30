import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CarsService } from '../cars.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  constructor(private carsService: CarsService, private router: Router) { }

  postUser(userForm: NgForm) {
    if (userForm.value.id) {
      this.carsService.updateData(userForm.value).subscribe(redData => {
        console.log(redData);
        this.carsService.getData();
        userForm.reset();
        this.router.navigateByUrl('/users');
      }, err => {
        console.log(err);
      });
    } else {
   this.carsService.postData(userForm.value).subscribe(resData => {
     console.log(resData);
     this.carsService.getData();
     userForm.reset();
     this.router.navigateByUrl('/users');
   }, err => {
     console.log(err);
   });
 }
}

  ngOnInit() {
  }

}
