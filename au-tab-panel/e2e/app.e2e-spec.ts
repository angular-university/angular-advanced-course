import { AuTabPanelPage } from './app.po';

describe('au-tab-panel App', () => {
  let page: AuTabPanelPage;

  beforeEach(() => {
    page = new AuTabPanelPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
