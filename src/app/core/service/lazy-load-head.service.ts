import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';


@Injectable()
export class LazyLoadHeadService {

  constructor(@Inject(DOCUMENT) private document: HTMLDocument) {}

  loadLinkStyle(cssFile: string) {
    /* <head> <link id="lazy-theme" rel="stylesheet" type="text/css" href="lazy-first.css"></head> */
    const headElement = this.document.getElementsByTagName("head")[0];
    const existLinkElement = this.document.getElementById(
      "lazy-theme"
    ) as HTMLLinkElement;
    if (existLinkElement) {
      existLinkElement.href = cssFile;
    } else {
      const linkElement = this.document.createElement("link");
      linkElement.id = 'lazy-theme'
      linkElement.rel = "stylesheet";
      linkElement.href = cssFile;
      headElement.appendChild(linkElement);
    }
  }

}