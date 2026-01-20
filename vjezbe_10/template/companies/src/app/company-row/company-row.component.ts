import { Component, input, output } from '@angular/core';
import { Company } from '../companies/companies.component';

@Component({
  selector: '[app-company-row]',
  imports: [],
  templateUrl: './company-row.component.html',
  styleUrl: './company-row.component.scss'
})
export class CompanyRowComponent {

  // Create our number formatter.
  formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    // These options can be used to round to whole numbers.
    minimumFractionDigits: 0, // This suffices for whole numbers, but will
                                // print 2500.10 as $2,500.1
    maximumFractionDigits: 2, // Allows up to 2 decimal places
  });

  formatter_wrapper(v: any) {
    if (v) return this.formatter.format(v);
    else return "$ 0"
  }


  company = input<Company | null>(null);

  triggerDelete = output<number | undefined>(); 

  generateFlagUrl(countryCode: string | undefined) {
    if (countryCode)
      return `https://flagsapi.com/${countryCode}/flat/64.png`;
    else return "";
  }  
}
