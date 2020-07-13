import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LittleMouseSearchByCdkOverlayComponent } from './little-mouse-search-by-cdk-overlay.component';

describe('LittleMouseSearchByCdkOverlayComponent', () => {
  let component: LittleMouseSearchByCdkOverlayComponent;
  let fixture: ComponentFixture<LittleMouseSearchByCdkOverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LittleMouseSearchByCdkOverlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LittleMouseSearchByCdkOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
