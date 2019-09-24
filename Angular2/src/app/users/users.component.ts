import { Component, OnInit } from '@angular/core';
import { CarsService } from '../cars.service';
import { Router } from '@angular/router';

@Component({ 
  
  \
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private carService: CarsService, private router: Router) { }

  updateUser(user){
    this.carService.selectedUser = user;
    this.router.navigateByUrl('/cars');
  }

 

  ngOnInit() {
    this.carService.getData();
    console.log(this.carService.users);
  }

}
