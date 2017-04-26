import { AuMaskPage } from './app.po';

describe('au-mask App', () => {
  let page: AuMaskPage;

  beforeEach(() => {
    page = new AuMaskPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
