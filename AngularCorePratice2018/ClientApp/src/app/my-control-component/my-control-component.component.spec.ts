import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MyControlComponentComponent } from './my-control-component.component';

describe('MyControlComponentComponent', () => {
  let component: MyControlComponentComponent;
  let fixture: ComponentFixture<MyControlComponentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MyControlComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyControlComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
