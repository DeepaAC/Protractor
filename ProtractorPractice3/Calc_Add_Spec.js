//import { browser } from "protractor";


//import { element, by } from "protractor";

//import { element, by } from "protractor";

/*describe('Calculator', function(){
    browser.get('http://www.way2automation.com/angularjs-protractor/calc/');
    browser.manage().window().maximize();

    it ('Addition Operation',function(){
        element(by.model('first')).sendKeys('5');
        element.all(by.options('value for (key, value) in operators')).then(function(item){
            item[0].click();
        });
        element(by.model('second')).sendKeys('6');
        element(by.buttonText('Go!')).click();  
        browser.sleep(4000);
        
    });
})*/
function calculator(var1,var2,index){
    element(by.model('first')).sendKeys(var1);
    element.all(by.options('value for (key, value) in operators')).then(function(item){

        item[index].click();
    });
    element(by.model('second')).sendKeys(var2);
    element(by.buttonText('Go!')).click();
    browser.sleep(4000);

};
beforeEach(function(){
    browser.get('http://www.way2automation.com/angularjs-protractor/calc/');
    browser.manage().window().maximize();
});
afterEach(function(){
   console.log('Test case excuted');
});

describe('Calculator', function(){
      /* beforeEach(function(){
        browser.get('http://www.way2automation.com/angularjs-protractor/calc/');
        browser.manage().window().maximize();
    });
    afterEach(function(){
       console.log('Test case excuted');
    });*/
   
    it ('Addition Operation',function(){
        
        calculator(10,6,0);
        browser.sleep(3000);
        var result = element(by.binding('latest')).getText();
        expect(result).toBe('16');
    });
});
