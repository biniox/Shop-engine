import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryProductPageComponent } from './summary-product-page.component';

describe('SummaryProductPageComponent', () => {
  let component: SummaryProductPageComponent;
  let fixture: ComponentFixture<SummaryProductPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryProductPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
