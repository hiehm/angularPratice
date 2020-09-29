import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebWorkWithGitFileComponent } from './web-work-with-git-file.component';

describe('WebWorkWithGitFileComponent', () => {
  let component: WebWorkWithGitFileComponent;
  let fixture: ComponentFixture<WebWorkWithGitFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebWorkWithGitFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebWorkWithGitFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
