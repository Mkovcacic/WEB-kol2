import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { tap } from "rxjs";

export type Company = {id?: string, name: string, employees: number, marketCap: number, country: string, countryCode: string};

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {
  private http = inject(HttpClient);
  
  constructor() {
    this.get_companies().subscribe();
  }

  companies = signal<Company[]>([]);

  get_companies() {
    return this.http.get("/api/companies")
      .pipe(
        tap((res: any) => {
          this.companies.set(res);
        })
      );
  }

  add_company(company: Company) {
    return this.http.post("/api/companies", company)
      .pipe(
        tap((res: any) => {
          this.companies.update(companies => [...companies, res]);
        })
      );
  }

  edit_company(id: string, company: Company) {
    return this.http.put(`/api/companies/${id}`, company)
      .pipe(
        tap((res: any) => {
          this.companies.update(companies => companies.map(c => c.id === id ? res : c));
        })
      );
  }

  delete_company(id: string) {
    return this.http.delete(`/api/companies/${id}`)
      .pipe(
        tap((res: any) => {
          this.companies.update(companies => companies.filter(c => c.id !== id));
        })
      );
  }
}
