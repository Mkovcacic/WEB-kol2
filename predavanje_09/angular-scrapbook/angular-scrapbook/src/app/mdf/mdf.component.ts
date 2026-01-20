import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-mdf',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './mdf.component.html',
  styleUrl: './mdf.component.scss'
})
export class MDFComponent {
  form: FormGroup = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(3)])
  });

  constructor() {
    // ako u međuvremenu nešto trebamo napraviti 
    // za inicijalne vrijednosti forme, instanciramo tu
    // npr. ovdje nekako dohvaćamo korisničke podatke
    // let obtained_data = "jmaltar@mathos.hr";
    // this.form = new FormGroup({});
  }

  submit() {
    console.log(this.form.value);
  }
}
