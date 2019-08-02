import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalCheckoutPageComponent } from './personal-checkout-page.component';

describe('PersonalCheckoutPageComponent', () => {
  let component: PersonalCheckoutPageComponent;
  let fixture: ComponentFixture<PersonalCheckoutPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalCheckoutPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalCheckoutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
