import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DynamicLoadingComponent } from './dynamic-loading.component';

describe('DynamicLoadingComponent', () => {
  let component: DynamicLoadingComponent;
  let fixture: ComponentFixture<DynamicLoadingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicLoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
