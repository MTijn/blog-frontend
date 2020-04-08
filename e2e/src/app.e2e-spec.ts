import {AppPage} from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo('/');
    expect(page.getParagraphText('app-root h1')).toEqual('MartijnKlene.nl');
  });

  it('should display error message', () => {
    page.navigateTo('/something-really-awkward');
    expect(page.getParagraphText('app-not-found h1')).toEqual('Whoops, page not found!');
  });
});
