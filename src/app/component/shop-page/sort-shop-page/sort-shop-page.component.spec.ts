import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortShopPageComponent } from './sort-shop-page.component';

describe('SortShopPageComponent', () => {
  let component: SortShopPageComponent;
  let fixture: ComponentFixture<SortShopPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortShopPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortShopPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
