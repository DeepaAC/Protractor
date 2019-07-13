//import { element } from "protractor";

import { browser, by } from "protractor";

describe('Home Page', function(){
    it ('should open the page',function(){
        browser.get('http://www.angularjs.org');
        browser.manage().window().maximize();
    
element(by.model('yourName')).sendKeys('Deepa');
browser.sleep(2000);
    
    });
});