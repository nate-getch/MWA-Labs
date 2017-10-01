import { ItopicReduxPage } from './app.po';

describe('itopic-redux App', function() {
  let page: ItopicReduxPage;

  beforeEach(() => {
    page = new ItopicReduxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
