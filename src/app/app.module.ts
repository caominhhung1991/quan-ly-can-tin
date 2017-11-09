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
import { GioiThieu2Component } from './components/gioi-thieu2/gioi-thieu2.component';
import { HealthyFoodComponent } from './components/healthy-food/healthy-food.component';
import { Map1Component } from './components/map1/map1.component';
import { GioiThieu3Component } from './components/gioi-thieu3/gioi-thieu3.component';

@NgModule({
  declarations: [
    AppComponent,
    Nav1Component,
    Header1Component,
    HeadVideo1Component,
    Slider1Component,
    DichVuComponent,
    GioiThieu1Component,
    FooterComponent,
    GioiThieu2Component,
    HealthyFoodComponent,
    Map1Component,
    GioiThieu3Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
