import { Angular4MainPage } from './app.po';

describe('angular4-main App', () => {
  let page: Angular4MainPage;

  beforeEach(() => {
    page = new Angular4MainPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
