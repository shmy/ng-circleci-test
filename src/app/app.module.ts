import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {AppRoutingModule} from './app-routing.module';
import {ProfileService} from './shared/services/profile.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {DevUIModule} from 'ng-devui';

const providers = [
  // {
  //   provide: APP_INITIALIZER,
  //   useFactory: (profileService: ProfileService) => {
  //     return () =>
  //       profileService.getProfile().subscribe();
  //   },
  //   deps: [ProfileService],
  //   multi: true
  // },
];
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule.forRoot()
  ],
  providers,
  bootstrap: [AppComponent]
})
export class AppModule {
}
