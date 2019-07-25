import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlMetadataParserComponent } from './url-metadata-parser.component';

describe('UrlMetadataParserComponent', () => {
  let component: UrlMetadataParserComponent;
  let fixture: ComponentFixture<UrlMetadataParserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrlMetadataParserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlMetadataParserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
