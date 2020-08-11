import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', redirectTo: 'post', pathMatch: 'full'},
  {path: 'post', loadChildren: () => import('./post/post.module').then(m => m.PostModule)},
  {path: 'client', loadChildren: () => import('./client/client.module').then(m => m.ClientModule)},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
