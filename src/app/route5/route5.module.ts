import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Route5RoutingModule } from './route5-routing.module';
import { TableComponent } from './table/table.component';
import { TableService } from '../services/table.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    Route5RoutingModule,
    HttpClientModule
  ],
  providers: [TableService]
})
export class Route5Module { }
