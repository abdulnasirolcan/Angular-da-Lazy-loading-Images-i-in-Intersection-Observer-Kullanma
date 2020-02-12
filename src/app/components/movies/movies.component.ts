import { Component, OnInit } from '@angular/core';
import { LazyLoadHeadService } from '../../core/service/lazy-load-head.service';
import { MocksArrayData } from '../../core/mocks/cards.mock';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html'
})
export class MoviesComponent implements OnInit {

  firstCards: any[] = [];
  secondCards: any[] = [];
  thirdCards: any[] = [];

  constructor(private lazyLoadHeadService: LazyLoadHeadService, private mocks: MocksArrayData){
    const { firstCards, secondCards, thirdCards } = this.mocks
    this.firstCards = firstCards;
    this.secondCards = secondCards;
    this.thirdCards = thirdCards;
  }

  ngOnInit(){
    this.lazyLoadHeadService.loadLinkStyle('movies.css');
  }

  trackById(index, item) {
    return item.id;
  }

}
