import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UploadComponent } from "./upload/upload.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: UploadComponent },
  { path: "**", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}