import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Angular Material Design 
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';

//Components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardComponent } from './components/card/card.component';

//Directive
import { LazyLoadImageDirective } from './directive/image-lazy-load/image-lazy-load.directive';
import { RouterModule } from '@angular/router';

const MaterialDesignModules = [
    MatToolbarModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    FlexLayoutModule
  ];

const Components = [
    HeaderComponent, 
    FooterComponent,
    CardComponent,
]  

@NgModule({
  imports: [CommonModule, RouterModule, ...MaterialDesignModules],
  declarations: [LazyLoadImageDirective, ...Components],
  exports: [LazyLoadImageDirective,...MaterialDesignModules, ...Components]
})
export class SharedModule {}