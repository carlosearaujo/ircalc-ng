import { IrcalcNgPage } from './app.po';

describe('ircalc-ng App', () => {
  let page: IrcalcNgPage;

  beforeEach(() => {
    page = new IrcalcNgPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
