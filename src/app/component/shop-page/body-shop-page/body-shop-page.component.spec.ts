import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyShopPageComponent } from './body-shop-page.component';

describe('BodyShopPageComponent', () => {
  let component: BodyShopPageComponent;
  let fixture: ComponentFixture<BodyShopPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyShopPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyShopPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
