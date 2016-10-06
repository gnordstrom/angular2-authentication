import { A2AuthenticationPage } from './app.po';

describe('a2-authentication App', function() {
  let page: A2AuthenticationPage;

  beforeEach(() => {
    page = new A2AuthenticationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
