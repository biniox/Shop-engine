import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortDescriptionProductPageComponent } from './short-description-product-page.component';

describe('ShortDescriptionProductPageComponent', () => {
  let component: ShortDescriptionProductPageComponent;
  let fixture: ComponentFixture<ShortDescriptionProductPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortDescriptionProductPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortDescriptionProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
