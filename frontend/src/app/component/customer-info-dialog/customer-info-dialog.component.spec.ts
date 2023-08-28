import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerInfoDialogComponent } from './customer-info-dialog.component';

describe('CustomerInfoDialogComponent', () => {
  let component: CustomerInfoDialogComponent;
  let fixture: ComponentFixture<CustomerInfoDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerInfoDialogComponent]
    });
    fixture = TestBed.createComponent(CustomerInfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
