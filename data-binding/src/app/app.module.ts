import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { DataBindingComponent } from './data-binding/data-binding.component'
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap'

@NgModule({
  declarations: [AppComponent, DataBindingComponent],
  imports: [BrowserModule, AppRoutingModule, NgbAlertModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
