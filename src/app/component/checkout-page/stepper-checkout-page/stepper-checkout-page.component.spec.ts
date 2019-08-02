import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperCheckoutPageComponent } from './stepper-checkout-page.component';

describe('StepperCheckoutPageComponent', () => {
  let component: StepperCheckoutPageComponent;
  let fixture: ComponentFixture<StepperCheckoutPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepperCheckoutPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperCheckoutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
