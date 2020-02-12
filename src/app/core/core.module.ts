import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoadHeadService } from './service/lazy-load-head.service';
import { MocksArrayData } from './mocks/cards.mock';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [LazyLoadHeadService, MocksArrayData],
  exports: []
})
export class CoreModule { }