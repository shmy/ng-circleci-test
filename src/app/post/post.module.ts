import { NgModule } from '@angular/core';
import { PostRoutingModule } from './post-routing.module';
import { HomeComponent } from './home/home.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [HomeComponent, PostDetailComponent],
  imports: [
    PostRoutingModule,
    SharedModule.forChild()
  ]
})
export class PostModule { }
