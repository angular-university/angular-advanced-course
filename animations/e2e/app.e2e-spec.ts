import { AnimationsPage } from './app.po';

describe('animations App', () => {
  let page: AnimationsPage;

  beforeEach(() => {
    page = new AnimationsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
