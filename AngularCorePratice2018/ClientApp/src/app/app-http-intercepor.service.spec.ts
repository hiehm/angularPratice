import { TestBed } from '@angular/core/testing';

import { AppHttpInterceporService } from './app-http-intercepor.service';

describe('AppHttpInterceporService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppHttpInterceporService = TestBed.get(AppHttpInterceporService);
    expect(service).toBeTruthy();
  });
});
