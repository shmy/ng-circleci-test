import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subject} from 'rxjs';
import {IPost, PostService} from '../../shared/services/post.service';
import {switchMap} from 'rxjs/operators';
import {HttpStatusUtil, withHttpStatus} from '../../utils/http-status.util';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostService
  ) {
  }
  status: HttpStatusUtil = HttpStatusUtil.getNewInstance();
  post: IPost;
  sbu: Subject<number> = new Subject();

  ngOnInit(): void {
    this.sbu.asObservable().pipe(
      withHttpStatus(this.status, switchMap((id) => this.postService.getPostById(id))),
    )
      .subscribe((post: IPost) => this.post = post);
    this.activatedRoute.params
      .subscribe(({id}) => this.sbu.next(id));
  }

}
