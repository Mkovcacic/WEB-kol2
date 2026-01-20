import { Component, inject, input, output } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { CompaniesService, Company } from "../companies.service";
import { ActivatedRoute, Router } from '@angular/router';

import { map } from "rxjs";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  private companiesService = inject(CompaniesService);
  private router = inject(Router);

  private activatedRoute = inject(ActivatedRoute);
  protected for_edit = this.activatedRoute.url.pipe(
    map(segments => segments[0]?.path === "edit")
  );
  protected id = this.activatedRoute.params.pipe(
    map(params => params["id"])
  );



  formFactory(company: Company | undefined) {
    const name = company?.name;
    const employees = company?.employees;
    const marketCap = company?.marketCap;
    const country = company?.country;
    const countryCode = company?.countryCode;
    const id = company?.id;

    return new FormGroup({
      name: new FormControl(name, [Validators.required]),
      employees: new FormControl(employees, [Validators.required]),
      marketCap: new FormControl(marketCap, [Validators.required]),
      country: new FormControl(country, [Validators.required]),
      countryCode: new FormControl(countryCode, [Validators.required]),
      id: new FormControl(id),
    });
  }  

  form: FormGroup | null = null;
  ngOnInit() {
    this.id.subscribe((id) => {
      let company_for_edit: Company | undefined;
      if (id)
        company_for_edit = this.companiesService.companies()
          .find(company => company.id === id);
      this.form = this.formFactory(company_for_edit);
    });
  }

  close() {
    this.form?.reset();
    this.router.navigate(["/companies"]);
  }

  submit() {
    const form_value = this.form!.value;
    this.id.subscribe((id) => {
      if (id) {
        this.companiesService.edit_company(id, form_value)
          .subscribe(res => this.close());
      } else {
        this.companiesService.add_company(form_value)
          .subscribe(res => this.close());
      } 
    });
  }

}
