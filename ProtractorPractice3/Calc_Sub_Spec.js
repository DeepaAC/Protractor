//import { element, by } from "protractor";

describe('Calculator', function(){
    browser.get('http://www.way2automation.com/angularjs-protractor/calc/');
    browser.manage().window().maximize();

    it ('Subtraction Operation',function(){
        element(by.model('first')).sendKeys('20');
element.all(by.options('value for (key, value) in operators')).then(function(item){
    
 item[4].click();

});
        element(by.model('second')).sendKeys('6');
        element(by.buttonText('Go!')).click();
        browser.sleep(4000);

    });
})