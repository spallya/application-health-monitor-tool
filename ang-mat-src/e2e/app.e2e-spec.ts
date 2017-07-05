import { AngMatSrcPage } from './app.po';

describe('ang-mat-src App', () => {
  let page: AngMatSrcPage;

  beforeEach(() => {
    page = new AngMatSrcPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
