import { TestBed } from '@angular/core/testing';

import { PostService } from './post.service';
import {SharedModule} from '../shared.module';

describe('PostService', () => {
  let service: PostService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule.forRoot()]
    });
    service = TestBed.inject(PostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
