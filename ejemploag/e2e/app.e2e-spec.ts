import { EjemploagPage } from './app.po';

describe('ejemploag App', () => {
  let page: EjemploagPage;

  beforeEach(() => {
    page = new EjemploagPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
