import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PostDetailComponent} from './post-detail/post-detail.component';

const routes: Routes = [
  { path: '', data: {keep: true}, component: HomeComponent },
  { path: ':id', component: PostDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
