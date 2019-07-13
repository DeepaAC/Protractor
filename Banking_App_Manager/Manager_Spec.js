//import { browser } from "protractor";
var data = require('./utility/data.json')

var winston = require('winston'); //logger
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
        transports: [
    
      new winston.transports.File({ filename: './report/winstonLog.log' })
    ]
  });

  function CustomerHAryLogin(){
    element(by.buttonText('Customer Login')).click();
browser.sleep(3000);
 element(by.model('custId')).click();
browser.sleep(3000);

    element(by.repeater('cust in Customers').row(1)).click();
   browser.sleep(3000);

  element(by.buttonText('Login')).click();
   browser.sleep(3000);
}//end of CustomerHAryLogin function

function currency(index){
    element.all(by.options('account for account in Accounts')).then(function(item){
        item[index].click();
        browser.sleep(3000);
})
    }//end of currency function

    function Deposit(amount1){
        element(by.buttonText('Deposit')).click();
browser.sleep(3000);
element(by.model('amount')).sendKeys(amount1)
browser.sleep(3000);
element(by.className('btn btn-default')).click();
browser.sleep(3000);

    }  

describe('Banking app for Manager',function(){

beforeEach(function(){
    browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
browser.manage().window().maximize();
});  
afterEach(function(){
    //console.log('Test Case Executed');
    logger.info('Test Case Executed');
});

xit ('Manager Test Case to add customer', function(){

element(by.buttonText('Bank Manager Login')).click();


element(by.buttonText('Add Customer')).click();

element(by.model('fName')).sendKeys('Max');

element(by.model('lName')).sendKeys('Mike');

element(by.model('postCd')).sendKeys('12345');
browser.sleep(3000);

 element(by.className('btn btn-default')).click();
//expect(addCustomer.getText()).toEqual('Customer added successfully with customer id');
//browser.sleep(2000);


});// end of Manager Test Case to add customer


xit ('Manager Test Case to  open Account for dollar', function(){

  element(by.buttonText('Bank Manager Login')).click();

  element(by.buttonText('Open Account')).click();

element(by.model('custId')).click();
browser.sleep(3000);
element(by.repeater('cust in Customers').row(1)).click();
browser.sleep(3000);

var select = element(by.model('currency'));
select.$('[value="Dollar"]').click();
browser.sleep(3000);

element(by.buttonText('Process')).click();
browser.sleep(4000);



});//end of Manager Test Case to open Account for dollar

xit ('Manager Test Case to  open Account for Pound', function(){

  element(by.buttonText('Bank Manager Login')).click();

  element(by.buttonText('Open Account')).click();

element(by.model('custId')).click();
browser.sleep(3000);
element(by.repeater('cust in Customers').row(1)).click();
browser.sleep(3000);

var select = element(by.model('currency'));
select.$('[value="Pound"]').click();
browser.sleep(3000);

element(by.buttonText('Process')).click();
browser.sleep(4000);


});//end of Manager Test Case to open Account for Pound
xit ('Manager Test Case to  open Account for Rupee', function(){

  element(by.buttonText('Bank Manager Login')).click();

  element(by.buttonText('Open Account')).click();

element(by.model('custId')).click();
browser.sleep(3000);
element(by.repeater('cust in Customers').row(1)).click();
browser.sleep(3000);

var select = element(by.model('currency'));
select.$('[value="Rupee"]').click();
browser.sleep(3000);

element(by.buttonText('Process')).click();
browser.sleep(4000);


});//end of Manager Test Case to open Account for Rupee


xit ('Manager Test Case to delete Customer', function(){

  element(by.buttonText('Bank Manager Login')).click();

  element(by.buttonText('Customers')).click();

  element(by.model('searchCustomer')).sendKeys('Ron');
browser.sleep(5000);

element(by.buttonText('Delete')).click();
browser.sleep(3000);

});

//Customer Login


xit ('Customer Test Case verifyCurrencyType',function(){
  CustomerHAryLogin();
currency(data.currencyIndex.c)
   });//end of Customer Test Case verifyCurrencyType

     
   xit('Customer Test Case InitialTraction',function(){
    CustomerHAryLogin();
element(by.buttonText('Transactions')).click();
browser.sleep(3000);

   });//end of Customer Test Case InitialTraction

   xit('Customer Test Case DepositMoney',function(){
    CustomerHAryLogin();
    currency(data.currencyIndex.c);
    browser.sleep(3000);
    Deposit(data.deposit.a);
});//end of Customer Test Case DepositMoney

xit('Customer Test Case TransationAfterDeposit',function(){
    CustomerHAryLogin();
    currency(data.currencyIndex.c);
    browser.sleep(3000);
    Deposit(data.deposit.a);
    element(by.buttonText('Transactions')).click(); //Customer Test Case TransationAfterDeposit
browser.sleep(3000);
});


   xit('Customer Test Case withDrawError',function(){
    CustomerHAryLogin();
    currency(data.currencyIndex.c);
    Deposit(data.deposit.a);
    browser.sleep(3000);
    element(by.buttonText('Withdrawl')).click(); 
    browser.sleep(3000);
    element(by.model('amount')).sendKeys('2001');
    browser.sleep(3000);
    element(by.buttonText('Withdraw')).click(); 
    browser.sleep(3000);

   });//end of withDrawError block

   xit('Customer Test Case withDrawSuccess & Transation After Withdrawl',function(){
    CustomerHAryLogin();
    currency(data.currencyIndex.c);
    Deposit(data.deposit.a);
    browser.sleep(3000);
    element(by.buttonText('Withdrawl')).click(); 
    browser.sleep(3000);
    element(by.model('amount')).sendKeys('1000');
    browser.sleep(3000);
    element(by.buttonText('Withdraw')).click(); 
    browser.sleep(3000);
    element(by.buttonText('Transactions')).click(); //Customer Test Case TransationAfterWithdrawl
    browser.sleep(4000);

    element(by.buttonText('Reset')).click(); //Customer Test Case Transation Reset
    browser.sleep(4000);

    element(by.buttonText('Back')).click(); //Customer Test Case To go to main age
    browser.sleep(4000);


   });
xit('Customer Test Case Logout',function(){
    CustomerHAryLogin();
    browser.sleep(4000);
    element(by.buttonText('Logout')).click(); //Customer Test Case Logout
    browser.sleep(4000);

});

});