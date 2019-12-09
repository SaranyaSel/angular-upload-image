import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HelloComponent } from './hello.component';
import { UploadComponent } from './upload/upload.component';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule,
    AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, UploadComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }