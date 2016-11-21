import { HillelTodoListPage } from './app.po';

describe('hillel-todo-list App', function() {
  let page: HillelTodoListPage;

  beforeEach(() => {
    page = new HillelTodoListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
