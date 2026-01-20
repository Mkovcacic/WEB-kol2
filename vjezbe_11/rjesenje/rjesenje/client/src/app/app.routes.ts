import { Routes } from '@angular/router';
import { CompaniesComponent } from './companies/companies.component';
import { FormComponent } from './form/form.component';

export const routes: Routes = [
    { path: "", pathMatch: "full", redirectTo: "companies" },
    { path: "companies", component: CompaniesComponent },
    { path: "new", component: FormComponent },
    { path: "edit/:id", component: FormComponent },
    { path: "**", redirectTo: "companies" }
];
