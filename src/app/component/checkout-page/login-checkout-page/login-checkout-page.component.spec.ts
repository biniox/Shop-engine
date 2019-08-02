import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCheckoutPageComponent } from './login-checkout-page.component';

describe('LoginCheckoutPageComponent', () => {
  let component: LoginCheckoutPageComponent;
  let fixture: ComponentFixture<LoginCheckoutPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginCheckoutPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginCheckoutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
