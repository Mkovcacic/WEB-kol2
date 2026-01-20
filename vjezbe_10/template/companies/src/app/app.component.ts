import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./nav/nav.component";
import { CompaniesComponent } from './companies/companies.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent, CompaniesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'companies';
}
