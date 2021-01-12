import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DynamicFlowChartsComponent } from './dynamic-flow-charts.component';

describe('DynamicFlowChartsComponent', () => {
  let component: DynamicFlowChartsComponent;
  let fixture: ComponentFixture<DynamicFlowChartsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicFlowChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFlowChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
