import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyControlComponentComponent } from './my-control-component.component';

describe('MyControlComponentComponent', () => {
  let component: MyControlComponentComponent;
  let fixture: ComponentFixture<MyControlComponentComponent>;

  beforeEach(async(() => {
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
