import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyControlMasterComponent } from './my-control-master.component';

describe('MyControlMasterComponent', () => {
  let component: MyControlMasterComponent;
  let fixture: ComponentFixture<MyControlMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyControlMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyControlMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
