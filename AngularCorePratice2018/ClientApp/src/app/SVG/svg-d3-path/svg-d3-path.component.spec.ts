import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SvgD3PathComponent } from './svg-d3-path.component';

describe('SvgD3PathComponent', () => {
  let component: SvgD3PathComponent;
  let fixture: ComponentFixture<SvgD3PathComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgD3PathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgD3PathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
