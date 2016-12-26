/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ParticlesStoreService } from './particles-store.service';

describe('Service: ParticlesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParticlesStoreService]
    });
  });

  it('should ...', inject([ParticlesStoreService], (service: ParticlesStoreService) => {
    expect(service).toBeTruthy();
  }));
});
