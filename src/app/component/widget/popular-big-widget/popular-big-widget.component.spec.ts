import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularBigWidgetComponent } from './popular-big-widget.component';

describe('PopularBigWidgetComponent', () => {
  let component: PopularBigWidgetComponent;
  let fixture: ComponentFixture<PopularBigWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularBigWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularBigWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
