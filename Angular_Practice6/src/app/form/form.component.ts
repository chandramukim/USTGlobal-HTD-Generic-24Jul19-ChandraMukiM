import { Component, OnInit } from '@angular/core';
import { Form } from '../form';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  model = new Form(1,"","","email");
  submitted = false;

  onSubmit() {
    this.submitted = true;
  }
  constructor() { }

  ngOnInit() {
  }

}
