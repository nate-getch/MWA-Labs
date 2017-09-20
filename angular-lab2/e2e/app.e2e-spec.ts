import { AngularLab2Page } from './app.po';

describe('angular-lab2 App', () => {
  let page: AngularLab2Page;

  beforeEach(() => {
    page = new AngularLab2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
