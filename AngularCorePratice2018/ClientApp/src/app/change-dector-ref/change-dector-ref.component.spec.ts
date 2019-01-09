import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDectorRefComponent } from './change-dector-ref.component';

describe('ChangeDectorRefComponent', () => {
  let component: ChangeDectorRefComponent;
  let fixture: ComponentFixture<ChangeDectorRefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeDectorRefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeDectorRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
