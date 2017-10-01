import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Nav1Component } from './components/nav1/nav1.component';
import { Header1Component } from './components/header1/header1.component';
import { HeadVideo1Component } from './components/head-video1/head-video1.component';
import { Slider1Component } from './components/slider1/slider1.component';
import { DichVuComponent } from './components/dich-vu/dich-vu.component';
import { GioiThieu1Component } from './components/gioi-thieu1/gioi-thieu1.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    Nav1Component,
    Header1Component,
    HeadVideo1Component,
    Slider1Component,
    DichVuComponent,
    GioiThieu1Component,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
