import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicEltsComponent } from './dynamic-elts/dynamic-elts.component';

const routes: Routes = [
  {path: '', component: DynamicEltsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Route6RoutingModule { }
