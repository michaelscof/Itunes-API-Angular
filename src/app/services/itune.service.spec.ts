import { TestBed } from '@angular/core/testing';

import { ItuneService } from './itune.service';

describe('ItuneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItuneService = TestBed.get(ItuneService);
    expect(service).toBeTruthy();
  });
});
