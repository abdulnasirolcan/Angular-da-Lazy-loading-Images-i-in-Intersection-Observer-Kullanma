import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocumentariesComponent } from './documentaries.component';
import { DocumentariesDetailComponent } from './documentaries-detail/documentaries-detail.component';

const routes: Routes = [{ path: '', component: DocumentariesComponent }, { path: ':id', component: DocumentariesDetailComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentariesRoutingModule { }
