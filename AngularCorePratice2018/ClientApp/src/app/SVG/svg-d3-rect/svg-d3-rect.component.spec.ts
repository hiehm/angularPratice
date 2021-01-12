import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SvgD3RectComponent } from './svg-d3-rect.component';

describe('SvgD3RectComponent', () => {
  let component: SvgD3RectComponent;
  let fixture: ComponentFixture<SvgD3RectComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgD3RectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgD3RectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
