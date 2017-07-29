import { StarwarsTestPage } from './app.po';

describe('starwars-test App', () => {
  let page: StarwarsTestPage;

  beforeEach(() => {
    page = new StarwarsTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
