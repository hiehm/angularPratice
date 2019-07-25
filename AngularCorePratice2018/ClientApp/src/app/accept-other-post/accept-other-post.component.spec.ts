import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptOtherPostComponent } from './accept-other-post.component';

describe('AcceptOtherPostComponent', () => {
  let component: AcceptOtherPostComponent;
  let fixture: ComponentFixture<AcceptOtherPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptOtherPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptOtherPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
