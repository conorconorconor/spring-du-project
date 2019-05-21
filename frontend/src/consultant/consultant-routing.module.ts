import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ConsultantComponent } from "./consultant.component";
import { ConsultantViewComponent } from "./consultant-view/consultant-view.component";
import { ConsultantCreateComponent } from "./consultant-create/consultant-create.component";

const routes: Routes = [
  { path: "consultants", component: ConsultantComponent },
  { path: "consultants/create", component: ConsultantCreateComponent },
  { path: "consultants/:id", component: ConsultantViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultantRoutingModule {}
