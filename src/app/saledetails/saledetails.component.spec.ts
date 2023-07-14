import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaledetailsComponent } from './saledetails.component';

describe('SaledetailsComponent', () => {
  let component: SaledetailsComponent;
  let fixture: ComponentFixture<SaledetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaledetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaledetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
