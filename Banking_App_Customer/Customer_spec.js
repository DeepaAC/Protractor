var data = require('./utility/data.json')//data driven(getting the data from another file)

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

    }//end of Deposit function

describe('Banking app for customer',function(){
    beforeEach(function(){
browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
browser.manage().window().maximize();
    });
afterEach(function(){
    //console.log('Test Case Executed');
    logger.info('Test Case Executed');
});

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

   it('Customer Test Case withDrawSuccess',function(){
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

   });//end of the  withDrawSuccess block

});//end of decribe block



