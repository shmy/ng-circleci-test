import { TestBed } from '@angular/core/testing';

import { ProfileService } from './profile.service';
import {SharedModule} from '../shared.module';

describe('ProfileService', () => {
  let service: ProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule.forRoot()]
    });
    service = TestBed.inject(ProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
