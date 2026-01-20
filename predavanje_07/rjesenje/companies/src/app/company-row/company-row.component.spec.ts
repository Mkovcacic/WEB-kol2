import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyRowComponent } from './company-row.component';

describe('CompanyRowComponent', () => {
  let component: CompanyRowComponent;
  let fixture: ComponentFixture<CompanyRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyRowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
