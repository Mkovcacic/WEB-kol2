import { Component } from '@angular/core';
import { CompanyRowComponent } from '../company-row/company-row.component';

import { FormGroup, FormControl, Validators } from "@angular/forms";

export type Company = {id?: string, name: string, employees: number, marketCap: number, country: string, countryCode: string};

import * as uuid from "uuid";
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-companies',
  imports: [CompanyRowComponent, FormComponent],
  templateUrl: './companies.component.html',
  styleUrl: './companies.component.scss'
})
export class CompaniesComponent {

  showTable: boolean = true;

  companies: Company[] = [
    { id: uuid.v4(), name: "TechNova Solutions", employees: 250, marketCap: 1.2e9, country: "United States", countryCode: "US" },
    { id: uuid.v4(), name: "GreenEdge Innovations", employees: 1200, marketCap: 5.6e9, country: "Germany", countryCode: "DE" },
    { id: uuid.v4(), name: "FutureFoods Inc.", employees: 350, marketCap: 800e6, country: "Canada", countryCode: "CA" },
    { id: uuid.v4(), name: "UrbanGrid Systems", employees: 75, marketCap: 150e6, country: "Australia", countryCode: "AU" },
    { id: uuid.v4(), name: "HealthSphere Technologies", employees: 900, marketCap: 2.3e9, country: "United Kingdom", countryCode: "GB" },
    { id: uuid.v4(), name: "AeroDynamics Corp.", employees: 1500, marketCap: 7.8e9, country: "Japan", countryCode: "JP" },
    { id: uuid.v4(), name: "QuantumLogic Labs", employees: 50, marketCap: 600e6, country: "Switzerland", countryCode: "CH" },
    { id: uuid.v4(), name: "EcoVision Enterprises", employees: 300, marketCap: 1.1e9, country: "Netherlands", countryCode: "NL" },
    { id: uuid.v4(), name: "NextGen Robotics", employees: 450, marketCap: 3.4e9, country: "South Korea", countryCode: "KR" },
    { id: uuid.v4(), name: "SolarPioneers Ltd.", employees: 200, marketCap: 1.5e9, country: "India", countryCode: "IN" }
  ];


  edit(id: string | undefined) {
    console.log(id);
  }

  remove(id: string | undefined) {
    this.companies = this.companies.filter(company => company.id !== id);
  }

formFactory() {
  let name = undefined;
  let employees = undefined;
  let marketCap = undefined;
  let country = undefined;
  let countryCode = undefined;
  let id = undefined;

  return new FormGroup({
    name: new FormControl(name, [Validators.required]),
    employees: new FormControl(employees, [Validators.required]),
    marketCap: new FormControl(marketCap, [Validators.required]),
    country: new FormControl(country, [Validators.required]),
    countryCode: new FormControl(countryCode, [Validators.required]),
    id: new FormControl(id),
  });
}

form: FormGroup | null = this.formFactory();

addCompany(company: Company) {
  company.id = uuid.v4();
  this.companies.push(company);
}

}
