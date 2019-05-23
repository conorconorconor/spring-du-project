import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ConsultantComponent } from "./consultant.component";
import { ConsultantViewComponent } from "./consultant-view/consultant-view.component";
import { ConsultantCreateComponent } from "./consultant-create/consultant-create.component";
import { AuthGuard } from "../services/auth.guard";

const routes: Routes = [
  {
    path: "consultants",
    component: ConsultantComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "consultants/create",
    component: ConsultantCreateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "consultants/:id",
    component: ConsultantViewComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultantRoutingModule {}
