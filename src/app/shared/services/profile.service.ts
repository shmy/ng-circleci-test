import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

export interface IProfile {
  id: number;
  username: string;
}
@Injectable()
export class ProfileService {
  profile: IProfile;
  constructor(private httpClient: HttpClient) { }
  getProfile(): Observable<IProfile> {
    return this.httpClient.get<IProfile>('/profile').pipe(
      tap(profile => this.profile = profile)
    );
  }
}
