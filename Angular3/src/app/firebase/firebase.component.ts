import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { NgForm } from '@angular/forms';
import { format } from 'url';
import { Router } from '@angular/router';

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent implements OnInit {

  constructor(private firebaseservice: FirebaseService, private router: Router) {

   }
   postUser(userForm: NgForm) {
     if (userForm.value.id) {
       this.firebaseservice.updateData(userForm.value).subscribe(redData => {
         console.log(redData);
         this.firebaseservice.getData();
         userForm.reset();
         this.router.navigateByUrl('/user');
       }, err => {
         console.log(err);
       });
     } else {
    this.firebaseservice.postData(userForm.value).subscribe(resData => {
      console.log(resData);
      this.firebaseservice.getData();
      userForm.reset();
      this.router.navigateByUrl('/user');
    }, err => {
      console.log(err);
    });
  }
}
  ngOnInit() {
  }

}
