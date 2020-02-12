import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "filmler", pathMatch: "full" },
  {
    path: "filmler",
    loadChildren: () =>
      import("./components/movies/movies.module").then(m => m.MoviesModule)
  },
  {
    path: "belgeseller",
    loadChildren: () =>
      import("./components/documentaries/documentaries.module").then(
        m => m.DocumentariesModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
