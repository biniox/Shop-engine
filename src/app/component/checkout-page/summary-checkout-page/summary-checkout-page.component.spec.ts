import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryCheckoutPageComponent } from './summary-checkout-page.component';

describe('SummaryCheckoutPageComponent', () => {
  let component: SummaryCheckoutPageComponent;
  let fixture: ComponentFixture<SummaryCheckoutPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryCheckoutPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryCheckoutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
