import { AuModalPage } from './app.po';

describe('au-modal App', () => {
  let page: AuModalPage;

  beforeEach(() => {
    page = new AuModalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
