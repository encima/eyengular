import { EyengularPage } from './app.po';

describe('eyengular App', () => {
  let page: EyengularPage;

  beforeEach(() => {
    page = new EyengularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
