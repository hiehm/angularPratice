import { TestBed } from '@angular/core/testing';

import { AppINITIALZERService } from './app-initialzer.service';

describe('AppINITIALZERService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppINITIALZERService = TestBed.get(AppINITIALZERService);
    expect(service).toBeTruthy();
  });
});
