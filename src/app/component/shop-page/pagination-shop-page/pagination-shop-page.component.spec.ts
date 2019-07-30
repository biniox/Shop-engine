import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationShopPageComponent } from './pagination-shop-page.component';

describe('PaginationShopPageComponent', () => {
  let component: PaginationShopPageComponent;
  let fixture: ComponentFixture<PaginationShopPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationShopPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationShopPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
