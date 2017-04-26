import { AngularAdvancedCoursePage } from './app.po';

describe('angular-advanced-course App', () => {
  let page: AngularAdvancedCoursePage;

  beforeEach(() => {
    page = new AngularAdvancedCoursePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
