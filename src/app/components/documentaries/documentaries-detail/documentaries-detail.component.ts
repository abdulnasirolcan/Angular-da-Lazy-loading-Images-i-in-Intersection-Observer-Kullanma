import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { MocksArrayData } from '../../../core/mocks/cards.mock';
import { LazyLoadHeadService } from '../../../core/service/lazy-load-head.service';

@Component({
  selector: 'app-documentaries-detail',
  templateUrl: './documentaries-detail.component.html'
})
export class DocumentariesDetailComponent implements OnInit {

  routerLinkId: string;

  get documentariesDetailCardsArrayToObject() {  
    const findIndex = this.mocks.documentariesDetailCards.findIndex(card=> card.id === this.routerLinkId)  
    return this.mocks.documentariesDetailCards[findIndex]
  }

  constructor(private lazyLoadHeadService: LazyLoadHeadService, private route: ActivatedRoute, private mocks: MocksArrayData) {
    this.route.params.subscribe(params => this.routerLinkId = params.id);
  }

  ngOnInit() {
    this.lazyLoadHeadService.loadLinkStyle('documentaries-detail.css');
  }

}
