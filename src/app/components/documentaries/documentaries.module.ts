import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentariesRoutingModule } from './documentaries-routing.module';
import { DocumentariesComponent } from './documentaries.component';
import { LazyLoadHeadService } from '../../core/service/lazy-load-head.service';
import { DocumentariesDetailComponent } from './documentaries-detail/documentaries-detail.component';
import { CoreModule } from '../../core/core.module';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [DocumentariesComponent, DocumentariesDetailComponent],
  imports: [
    CommonModule,
    DocumentariesRoutingModule,
    SharedModule,
    CoreModule
  ],
  providers: [LazyLoadHeadService]
})
export class DocumentariesModule { }
