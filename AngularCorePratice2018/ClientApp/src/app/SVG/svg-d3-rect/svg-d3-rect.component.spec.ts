import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgD3RectComponent } from './svg-d3-rect.component';

describe('SvgD3RectComponent', () => {
  let component: SvgD3RectComponent;
  let fixture: ComponentFixture<SvgD3RectComponent>;

  beforeEach(async(() => {
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
