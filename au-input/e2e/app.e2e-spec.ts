import { AuSvgButtonPage } from './app.po';

describe('au-svg-button App', () => {
  let page: AuSvgButtonPage;

  beforeEach(() => {
    page = new AuSvgButtonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
