import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimeDisplayServicedComponent } from './time-display-serviced/time-display-serviced.component';

const routes: Routes = [
  {path: '', component: TimeDisplayServicedComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Route4RoutingModule { }
