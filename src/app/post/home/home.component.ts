import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../../shared/services/profile.service';
import {IPost, PostService} from '../../shared/services/post.service';
import {of} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {HttpStatusUtil, withHttpStatus} from '../../utils/http-status.util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
    public profileService: ProfileService,
    private postService: PostService
  ) { }
  status: HttpStatusUtil = HttpStatusUtil.getNewInstance();
  posts: IPost[] = [];
  ngOnInit(): void {
    of(1).pipe(
      withHttpStatus(this.status, switchMap(() => this.postService.getPostList()))
    ).subscribe(data => {
      this.posts = data;
    });
  }

}
