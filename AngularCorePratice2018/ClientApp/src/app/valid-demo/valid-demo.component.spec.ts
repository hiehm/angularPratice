import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidDemoComponent } from './valid-demo.component';

describe('ValidDemoComponent', () => {
  let component: ValidDemoComponent;
  let fixture: ComponentFixture<ValidDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
