import {TestBed} from '@angular/core/testing';

import {VortragService} from './vortrag.service';

describe('VortragService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VortragService = TestBed.get(VortragService);
    expect(service).toBeTruthy();
  });
});
