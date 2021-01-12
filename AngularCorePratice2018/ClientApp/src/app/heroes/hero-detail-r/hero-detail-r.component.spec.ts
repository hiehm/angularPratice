import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HeroDetailRComponent } from './hero-detail-r.component';

describe('HeroDetailRComponent', () => {
  let component: HeroDetailRComponent;
  let fixture: ComponentFixture<HeroDetailRComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroDetailRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
