/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BallsStoreService } from './balls-store.service';

describe('Service: BallsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BallsStoreService]
    });
  });

  it('should ...', inject([BallsStoreService], (service: BallsStoreService) => {
    expect(service).toBeTruthy();
  }));
});
