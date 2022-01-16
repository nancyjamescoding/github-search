import { TestBed } from '@angular/core/testing';

import { GetReposByUsernameService } from './get-repos-by-username.service';

describe('GetReposByUsernameService', () => {
  let service: GetReposByUsernameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetReposByUsernameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
