import { TestBed } from '@angular/core/testing';

import { FirebaseBaseHttpService } from './firebase-base-http.service';

describe('FirebaseBaseHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirebaseBaseHttpService = TestBed.get(FirebaseBaseHttpService);
    expect(service).toBeTruthy();
  });
});
