import { AngularLab3Page } from './app.po';

describe('angular-lab3 App', () => {
  let page: AngularLab3Page;

  beforeEach(() => {
    page = new AngularLab3Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
