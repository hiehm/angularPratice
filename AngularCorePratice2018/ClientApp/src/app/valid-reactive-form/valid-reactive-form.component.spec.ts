import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ValidReactiveFormComponent } from './valid-reactive-form.component';

describe('ValidReactiveFormComponent', () => {
  let component: ValidReactiveFormComponent;
  let fixture: ComponentFixture<ValidReactiveFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidReactiveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
