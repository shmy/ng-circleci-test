import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface IPost {
  id: number;
  title: string;
  author: string;
}
@Injectable()
export class PostService {

  constructor(private httpClient: HttpClient) {
    console.log('------PostService init');
  }
  getPostList(): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>('/posts');
  }
  getPostById(id: number): Observable<IPost> {
    return this.httpClient.get<IPost>('/posts/' + id);
  }
}
