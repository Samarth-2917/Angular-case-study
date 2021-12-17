import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RotatingBannerComponent } from "./rotating-banner/rotating-banner.component";

const routes: Routes = [
    {path: '', component: RotatingBannerComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class Route1RoutingModule {}