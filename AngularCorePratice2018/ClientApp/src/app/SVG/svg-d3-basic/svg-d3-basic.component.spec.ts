import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgD3BasicComponent } from './svg-d3-basic.component';

describe('SvgD3BasicComponent', () => {
  let component: SvgD3BasicComponent;
  let fixture: ComponentFixture<SvgD3BasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgD3BasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgD3BasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
