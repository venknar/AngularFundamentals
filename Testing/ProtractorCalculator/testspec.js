describe('pController', function () {

  it('the dom initially has a greeting', function () {
    browser.get('http://localhost:8888/');
    expect(element(by.id('greeting')).getText()).toEqual('Hello, World!');
  });

});


describe('TestOneController', function () {

  var greeting = element(by.id('greeting'));
  var textInputBox = element(by.css('[ng-model="newText"]'));
  var changeGreetingButton = element(by.css('.btn-default'));

  beforeEach(function() {
    browser.get('http://localhost:8888/#/one');
  });

  it('initially has a greeting', function () {
    expect(greeting.getText()).toEqual('Hello, World!');
  });

  it('clicking the button changes the greeting if text is inputed', function () {
    textInputBox.sendKeys('Hi!');
    changeGreetingButton.click();
    expect(greeting.getText()).toEqual('Hi!');
  });

  it('clicking the button does not change the greeting if text is not inputed', function () {
    textInputBox.sendKeys('');
    changeGreetingButton.click();
    expect(greeting.getText()).toEqual('Hello, World!');
  });

});
