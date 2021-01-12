import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SvgD3ViewBoxComponent } from './svg-d3-view-box.component';

describe('SvgD3ViewBoxComponent', () => {
  let component: SvgD3ViewBoxComponent;
  let fixture: ComponentFixture<SvgD3ViewBoxComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgD3ViewBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgD3ViewBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
