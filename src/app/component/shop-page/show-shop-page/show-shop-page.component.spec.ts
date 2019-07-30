import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowShopPageComponent } from './show-shop-page.component';

describe('ShowShopPageComponent', () => {
  let component: ShowShopPageComponent;
  let fixture: ComponentFixture<ShowShopPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowShopPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowShopPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
