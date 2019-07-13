//import { element, by, ExpectedConditions } from "protractor";

function calculator(var1,var2,index){
    element(by.model('first')).sendKeys(var1);
    element.all(by.options('value for (key, value) in operators')).then(function(item){

        item[index].click();
    });
    element(by.model('second')).sendKeys(var2);
    element(by.buttonText('Go!')).click();
    browser.sleep(4000);

};

/*For Every Operation new browser is opened

beforeEach(function(){
    browser.get('http://www.way2automation.com/angularjs-protractor/calc/');
    browser.manage().window().maximize();
});
afterEach(function(){
   console.log('Test case excuted');
});*/

describe('Calculator', function(){
    //only one time browser will open
    beforeEach(function(){
        browser.get('http://www.way2automation.com/angularjs-protractor/calc/');
        browser.manage().window().maximize();
    });
    afterEach(function(){
       console.log('Test case excuted');
    });
   
    it ('Addition Operation',function(){
        /*element(by.model('first')).sendKeys('5');
        element.all(by.options('value for (key, value) in operators')).then(function(item){
    
            item[0].click();
        });
        element(by.model('second')).sendKeys('6');
        element(by.buttonText('Go!')).click();
        browser.sleep(4000);*/
        calculator(10,6,0);
        var result = element(by.binding('latest')).getText();//
        /*  to check the binding value we need to go appinspect for the element and 
        do the view page source there we will get value.*/
        expect(result).toBe('16');
    });
    
    xit ('Division Operation',function(){
       /* browser.sleep(3000); //add to avoid the error after the disabling the fisrt it block
        element(by.model('first')).sendKeys('20');
element.all(by.options('value for (key, value) in operators')).then(function(item){
    
 item[1].click();

});
        element(by.model('second')).sendKeys('6');
        element(by.buttonText('Go!')).click();
        browser.sleep(4000);*/
        calculator(30,6,1);
        var result = element(by.binding('latest')).getText();
        expect(result).toBe('5');

    });
    it ('Modulo Operation',function(){
        /*element(by.model('first')).sendKeys('20');
element.all(by.options('value for (key, value) in operators')).then(function(item){
    
 item[2].click();

});
        element(by.model('second')).sendKeys('6');
        element(by.buttonText('Go!')).click();
        browser.sleep(4000);*/
        calculator(10,6,2);
        var result = element(by.binding('latest')).getText();
        expect(result).toBe('4');

    });
    it ('multiplication Operation', function(){

       /* element(by.model('first')).sendKeys('20');
        element.all(by.options('value for (key, value) in operators')).then(function (item) {
            item[3].click();
                    });
                    element(by.model('second')).sendKeys('6');
        element(by.buttonText('Go!')).click();
        browser.sleep(4000);*/
        calculator(10,6,3);
        var result = element(by.binding('latest')).getText();
        expect(result).toBe('60');

    });
    it ('Subtraction Operation',function(){
     /*   element(by.model('first')).sendKeys('20');
element.all(by.options('value for (key, value) in operators')).then(function(item){
    
 item[4].click();

});
        element(by.model('second')).sendKeys('6');
        element(by.buttonText('Go!')).click();
        browser.sleep(4000);*/
        calculator(10,6,4);
        var result = element(by.binding('latest')).getText();
        expect(result).toBe('4');

    });
})