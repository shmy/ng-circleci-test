import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {httpInterceptorProviders} from './interceptors';
import {PostService} from './services/post.service';
import {ProfileService} from './services/profile.service';
import { HttpStatusComponent } from './http-status/http-status.component';
import {RouteReuseStrategy} from '@angular/router';
import {App1RouteReuseStrategy} from './route-reuse-strategy/app1-route-reuse-strategy';
import {ReactiveFormsModule} from '@angular/forms';
import {DevUIModule} from 'ng-devui';
@NgModule({
  declarations: [HttpStatusComponent],
  exports: [
    HttpStatusComponent,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    DevUIModule,
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: SharedModule,
      providers: [
        ...httpInterceptorProviders,
        PostService,
        ProfileService,
        {provide: RouteReuseStrategy, useClass: App1RouteReuseStrategy}
      ]
    };
  }
  static forChild(): ModuleWithProviders<any> {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}
