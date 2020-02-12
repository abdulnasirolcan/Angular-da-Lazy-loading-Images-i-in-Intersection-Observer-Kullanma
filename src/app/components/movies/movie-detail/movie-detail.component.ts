import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { MocksArrayData } from '../../../core/mocks/cards.mock';
import { LazyLoadHeadService } from '../../../core/service/lazy-load-head.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html'
})
export class MovieListComponent implements OnInit {
  routerLinkId: string;

  get cardDetailArrayToObject() {  
    const findIndex = this.mocks.cardDetails.findIndex(card=> card.id === this.routerLinkId)  
    return this.mocks.cardDetails[findIndex]
  }

  constructor(private lazyLoadHeadService: LazyLoadHeadService, private route: ActivatedRoute, private mocks: MocksArrayData) {
    this.route.params.subscribe(params => this.routerLinkId = params.id);
  }

  ngOnInit() {
    this.lazyLoadHeadService.loadLinkStyle('movie-detail.css');
  }

}
