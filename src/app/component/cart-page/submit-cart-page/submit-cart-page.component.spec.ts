import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitCartPageComponent } from './submit-cart-page.component';

describe('SubmitCartPageComponent', () => {
  let component: SubmitCartPageComponent;
  let fixture: ComponentFixture<SubmitCartPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitCartPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitCartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
