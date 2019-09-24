import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private firebaseService: FirebaseService, private router: Router) {

   }
   updateUser(user) {
     this.firebaseService.selectedUser = user;
     this.router.navigateByUrl('/firebase');
   }

  //  deleteUser(user) {
  //   this.firebaseService.deleteData(user).subscribe(resData=>{
  //     console.log(resData);
  //     this.firebaseService.getData();
  //   });
  //  }

  ngOnInit() {
    this.firebaseService.getData();
    console.log(this.firebaseService.users);
  }

}

