import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GanonComponent } from "./ganon.component";

const routes: Routes = [{ path: "ganon", component: GanonComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GanonRoutingModule {}
