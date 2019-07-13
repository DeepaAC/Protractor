// An example configuration file.
exports.config = {
    directConnect: true,
  
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
      'browserName': 'chrome'
    },
  
    // Framework to use. Jasmine is recommended.
    framework: 'jasmine',
  
    // Spec patterns are relative to the current working directory when
    // protractor is called.

   // specs: ['Calc_Multi_Spec.js','Calc_Add_Spec.js','Calc_Div_Spec.js','Calc_Sub_Spec.js'],
   specs: ['Arthematics_operations_Spec.js'],

 /* suites:{
Testcase1:['Calc_Multi_Spec.js'],
Testcase2:['Calc_Add_Spec.js'],
Testcase3:['Calc_Div_Spec.js'],
Testcase4:['Calc_Sub_Spec.js']
  },*/

    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
      defaultTimeoutInterval: 70000
    }
  };
  