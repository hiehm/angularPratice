import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LittleMouseSearchPartialComponent } from './little-mouse-search-partial.component';

describe('LittleMouseSearchPartialComponent', () => {
  let component: LittleMouseSearchPartialComponent;
  let fixture: ComponentFixture<LittleMouseSearchPartialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LittleMouseSearchPartialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LittleMouseSearchPartialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
