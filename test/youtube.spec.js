describe('youtube Page', function() {

  beforeAll(function() {
    browser.get(browser.baseUrl);
  });

  it('should land on youtube Screen', function () {
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + 'youtube');
  });

});
