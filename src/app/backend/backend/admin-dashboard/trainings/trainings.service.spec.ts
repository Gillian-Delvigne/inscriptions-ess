import { TestBed } from '@angular/core/testing';

import { TrainingsService } from './trainings.service';

describe('TrainingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrainingsService = TestBed.get(TrainingsService);
    expect(service).toBeTruthy();
  });
});
