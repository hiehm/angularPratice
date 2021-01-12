import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FlowNode2Component } from './flow-node2.component';

describe('FlowNode2Component', () => {
  let component: FlowNode2Component;
  let fixture: ComponentFixture<FlowNode2Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowNode2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowNode2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
