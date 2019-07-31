import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCartPageComponent } from './list-cart-page.component';

describe('ListCartPageComponent', () => {
  let component: ListCartPageComponent;
  let fixture: ComponentFixture<ListCartPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCartPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
