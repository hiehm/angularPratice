import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NgxSlickCarseoulPlugInComponent } from './ngx-slick-carseoul-plug-in.component';

describe('NgxSlickCarseoulPlugInComponent', () => {
  let component: NgxSlickCarseoulPlugInComponent;
  let fixture: ComponentFixture<NgxSlickCarseoulPlugInComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxSlickCarseoulPlugInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSlickCarseoulPlugInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
