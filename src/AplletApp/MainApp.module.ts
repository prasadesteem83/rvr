import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MasterAppComponent } from './Master/MasterApp.component';

@NgModule({
  declarations: [
    MasterAppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [MasterAppComponent]
})
export class AppModule { }
