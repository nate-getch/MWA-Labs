import { ReduxPage } from './app.po';

describe('redux App', function() {
  let page: ReduxPage;

  beforeEach(() => {
    page = new ReduxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
