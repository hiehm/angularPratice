import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SvgBasicComponent } from './svg-basic.component';

describe('SvgBasicComponent', () => {
  let component: SvgBasicComponent;
  let fixture: ComponentFixture<SvgBasicComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
