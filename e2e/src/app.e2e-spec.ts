import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('MartijnKlene.nl');
  });
  it('should not be logged in', () => {
    page.navigateTo();
    expect(page.getLoginButton()).toEqual('Login');
  });
});
