import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import {SharedModule} from '../shared/shared.module';
import {ClientRoutingModule} from './client-routing.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    ClientRoutingModule,
    SharedModule.forChild(),
  ]
})
export class ClientModule { }
