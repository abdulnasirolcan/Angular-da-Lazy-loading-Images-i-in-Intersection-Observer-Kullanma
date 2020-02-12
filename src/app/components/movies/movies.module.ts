import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { MovieListComponent } from './movie-detail/movie-detail.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [MoviesComponent, MovieListComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    SharedModule,
    CoreModule
  ],
  exports: [MoviesComponent, MovieListComponent]
})
export class MoviesModule { }
