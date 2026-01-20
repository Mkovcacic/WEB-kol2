import { Component } from '@angular/core';
import { CompanyRowComponent } from '../company-row/company-row.component';

export type Company = {id: number, name: string, employees: number, marketCap: number, country: string, countryCode: string};

@Component({
  selector: 'app-companies',
  imports: [CompanyRowComponent],
  templateUrl: './companies.component.html',
  styleUrl: './companies.component.scss'
})
export class CompaniesComponent {

  // Create our number formatter.
  formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    // These options can be used to round to whole numbers.
    minimumFractionDigits: 0, // This suffices for whole numbers, but will
                                // print 2500.10 as $2,500.1
    maximumFractionDigits: 2, // Allows up to 2 decimal places
  });
  

  companies: Company[] = [
    { id: 0, name: "TechNova Solutions", employees: 250, marketCap: 1.2e9, country: "United States", countryCode: "US" },
    { id: 1, name: "GreenEdge Innovations", employees: 1200, marketCap: 5.6e9, country: "Germany", countryCode: "DE" },
    { id: 2, name: "FutureFoods Inc.", employees: 350, marketCap: 800e6, country: "Canada", countryCode: "CA" },
    { id: 3, name: "UrbanGrid Systems", employees: 75, marketCap: 150e6, country: "Australia", countryCode: "AU" },
    { id: 4, name: "HealthSphere Technologies", employees: 900, marketCap: 2.3e9, country: "United Kingdom", countryCode: "GB" },
    { id: 5, name: "AeroDynamics Corp.", employees: 1500, marketCap: 7.8e9, country: "Japan", countryCode: "JP" },
    { id: 6, name: "QuantumLogic Labs", employees: 50, marketCap: 600e6, country: "Switzerland", countryCode: "CH" },
    { id: 7, name: "EcoVision Enterprises", employees: 300, marketCap: 1.1e9, country: "Netherlands", countryCode: "NL" },
    { id: 8, name: "NextGen Robotics", employees: 450, marketCap: 3.4e9, country: "South Korea", countryCode: "KR" },
    { id: 9, name: "SolarPioneers Ltd.", employees: 200, marketCap: 1.5e9, country: "India", countryCode: "IN" }
  ];



removeById(id: number | undefined) {
  this.companies = this.companies.filter(company => company.id !== id);
}

}
