import { HonkeAtestPage } from './app.po';

describe('honke-atest App', function() {
  let page: HonkeAtestPage;

  beforeEach(() => {
    page = new HonkeAtestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
