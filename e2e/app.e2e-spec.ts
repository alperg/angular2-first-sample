import { Angular2FirstSamplePage } from './app.po';

describe('angular2-first-sample App', function() {
  let page: Angular2FirstSamplePage;

  beforeEach(() => {
    page = new Angular2FirstSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
