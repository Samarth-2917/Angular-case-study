import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TimeDisplayComponent } from "./time-display/time-display.component";

const routes: Routes = [
    {path: '', component: TimeDisplayComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class Route3RoutingModule {}