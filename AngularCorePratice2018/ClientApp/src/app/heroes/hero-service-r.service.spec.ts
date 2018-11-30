import { TestBed } from '@angular/core/testing';

import { HeroServiceRService } from './hero-service-r.service';

describe('HeroServiceRService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeroServiceRService = TestBed.get(HeroServiceRService);
    expect(service).toBeTruthy();
  });
});
