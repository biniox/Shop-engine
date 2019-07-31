import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageProductPageComponent } from './image-product-page.component';

describe('ImageProductPageComponent', () => {
  let component: ImageProductPageComponent;
  let fixture: ComponentFixture<ImageProductPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageProductPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
