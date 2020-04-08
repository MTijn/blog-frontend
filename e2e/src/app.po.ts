import {browser, by, element} from 'protractor';

export class AppPage {
  navigateTo(destination: string) {
    return browser.get(destination);
  }

  getParagraphText(elementToGet: string) {
    return element(by.css(elementToGet)).getText();
  }
}
