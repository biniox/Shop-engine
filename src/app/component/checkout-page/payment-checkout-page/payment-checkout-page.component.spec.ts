import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentCheckoutPageComponent } from './payment-checkout-page.component';

describe('PaymentCheckoutPageComponent', () => {
  let component: PaymentCheckoutPageComponent;
  let fixture: ComponentFixture<PaymentCheckoutPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentCheckoutPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentCheckoutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
