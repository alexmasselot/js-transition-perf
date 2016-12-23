import { TransitionPerfPage } from './app.po';

describe('transition-perf App', function() {
  let page: TransitionPerfPage;

  beforeEach(() => {
    page = new TransitionPerfPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
