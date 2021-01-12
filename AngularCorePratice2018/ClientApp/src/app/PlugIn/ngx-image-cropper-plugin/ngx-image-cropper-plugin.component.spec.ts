import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NgxImageCropperPluginComponent } from './ngx-image-cropper-plugin.component';

describe('NgxImageCropperPluginComponent', () => {
  let component: NgxImageCropperPluginComponent;
  let fixture: ComponentFixture<NgxImageCropperPluginComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxImageCropperPluginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxImageCropperPluginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
