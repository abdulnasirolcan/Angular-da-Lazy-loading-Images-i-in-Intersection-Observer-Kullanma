import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesComponent } from './movies.component';
import { MovieListComponent } from './movie-detail/movie-detail.component';

const routes: Routes = [{ path: '', component: MoviesComponent }, { path: ':id', component: MovieListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
