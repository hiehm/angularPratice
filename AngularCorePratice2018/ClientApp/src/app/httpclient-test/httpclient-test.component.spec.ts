import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HttpclientTestComponent } from './httpclient-test.component';

describe('HttpclientTestComponent', () => {
  let component: HttpclientTestComponent;
  let fixture: ComponentFixture<HttpclientTestComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpclientTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpclientTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
