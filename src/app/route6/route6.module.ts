import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Route6RoutingModule } from './route6-routing.module';
import { DynamicEltsComponent } from './dynamic-elts/dynamic-elts.component';


@NgModule({
  declarations: [
    DynamicEltsComponent
  ],
  imports: [
    CommonModule,
    Route6RoutingModule
  ]
})
export class Route6Module { }
