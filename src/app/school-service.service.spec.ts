import { TestBed } from '@angular/core/testing';

import { SchoolService } from './Core/school.service';

describe('SchoolServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SchoolService = TestBed.get(SchoolService);
    expect(service).toBeTruthy();
  });
});
