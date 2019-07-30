import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularWidgetComponent } from './popular-widget.component';

describe('PopularWidgetComponent', () => {
  let component: PopularWidgetComponent;
  let fixture: ComponentFixture<PopularWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
