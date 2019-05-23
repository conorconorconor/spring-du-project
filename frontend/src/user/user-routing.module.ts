import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserComponent } from "./user.component";
import { UserCreateComponent } from "./user-create/user-create.component";
import { AuthGuard } from "../services/auth.guard";

const routes: Routes = [
  {
    path: "user",
    canActivate: [AuthGuard],
    component: UserComponent
  },
  {
    path: "sign-up",
    component: UserCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
