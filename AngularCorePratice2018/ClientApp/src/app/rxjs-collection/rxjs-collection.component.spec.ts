import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RxjsCollectionComponent } from './rxjs-collection.component';

describe('RxjsCollectionComponent', () => {
  let component: RxjsCollectionComponent;
  let fixture: ComponentFixture<RxjsCollectionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
