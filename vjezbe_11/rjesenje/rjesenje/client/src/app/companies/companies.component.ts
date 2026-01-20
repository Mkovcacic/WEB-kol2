import { Component, inject } from '@angular/core';
import { CompanyRowComponent } from '../company-row/company-row.component';

import { CompaniesService } from "../companies.service";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-companies',
  imports: [CompanyRowComponent, RouterLink],
  templateUrl: './companies.component.html',
  styleUrl: './companies.component.scss'
})
export class CompaniesComponent {

  protected companiesService = inject(CompaniesService);



  remove(id: string) {
    this.companiesService.delete_company(id).subscribe();
  }

}
