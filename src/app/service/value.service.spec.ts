import { TestBed } from '@angular/core/testing';

import { ValueService } from './value.service';

describe('ValueService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ValueService = TestBed.get(ValueService);
    expect(service).toBeTruthy();
  });

  it('#getValue should return real value', () => {
    const service: ValueService = TestBed.get(ValueService);
    expect(service.getValue()).toBe('real value');
  });
});
