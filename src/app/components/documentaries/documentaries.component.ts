import { Component, OnInit } from '@angular/core';
import { LazyLoadHeadService } from '../../core/service/lazy-load-head.service';
import { MocksArrayData } from '../../core/mocks/cards.mock';

@Component({
  selector: 'app-documentaries',
  templateUrl: './documentaries.component.html'
})
export class DocumentariesComponent implements OnInit {

  firstDocumentariesCards: any[] = [];
  secondDocumentariesCards: any[] = [];

  constructor(private lazyLoadHeadService: LazyLoadHeadService,  private mocks: MocksArrayData){
     const { firstDocumentariesCards, secondDocumentariesCards } = this.mocks;
    this.firstDocumentariesCards = firstDocumentariesCards;
    this.secondDocumentariesCards = secondDocumentariesCards;
  }

  ngOnInit() {
    this.lazyLoadHeadService.loadLinkStyle('documentaries.css');
  }

  trackById(index, item) {
    return item.id;
  }

}
