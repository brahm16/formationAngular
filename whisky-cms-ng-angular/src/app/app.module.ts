import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import 'hammerjs';
import { BlogpostComponent } from './blogpost/blogpost.component';
import { BlogpostListComponent } from './blogpost-list/blogpost-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BlogpostService } from './blogpost.service';
import { MaterialModule } from './material.module';
@NgModule({
  declarations: [
    AppComponent,
    BlogpostComponent,
    BlogpostListComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,



  ],
  providers: [BlogpostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
