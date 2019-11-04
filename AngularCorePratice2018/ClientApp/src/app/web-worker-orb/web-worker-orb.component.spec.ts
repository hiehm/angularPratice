import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebWorkerOrbComponent } from './web-worker-orb.component';

describe('WebWorkerOrbComponent', () => {
  let component: WebWorkerOrbComponent;
  let fixture: ComponentFixture<WebWorkerOrbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebWorkerOrbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebWorkerOrbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
