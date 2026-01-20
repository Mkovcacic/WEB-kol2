import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule, Validators, FormGroup, FormControl } from "@angular/forms";

import { FilesService } from "./files.service";
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'app-root',
    imports: [CommonModule, RouterOutlet, FormsModule, ReactiveFormsModule, NgbProgressbarModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(protected filesService: FilesService) {}

  form: FormGroup = new FormGroup({
    file: new FormControl("file.txt", [ Validators.required ]),
    description: new FormControl("My description")
  });

  submit() {
    this.filesService.upload(this.form.value).subscribe();
  }
}
