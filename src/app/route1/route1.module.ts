import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RotatingBannerComponent } from './rotating-banner/rotating-banner.component';
import { Route1RoutingModule } from './route1-routing.module';



@NgModule({
  declarations: [
    RotatingBannerComponent
  ],
  imports: [
    CommonModule,
    Route1RoutingModule
  ]
})
export class Route1Module { }
