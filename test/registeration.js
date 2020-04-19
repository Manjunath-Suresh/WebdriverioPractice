const homePage = require("../pages/homepage")
const signinPage = require("../pages/signinpage")
const createAccount = require("../pages/createaccountpage")
const dataRepo = require("../datarepo/createaccount")

describe("register to the website", function(){
     it("launch the url", function(){
         browser.url('/');
     });

     it("signin for the registeration", function(){
         homePage.signIn.click();
         signinPage.pageHeading.waitForDisplayed();
         const pageheader = signinPage.pageHeading.getText();
         console.log(pageheader);
         expect(pageheader).toEqual("AUTHENTICATION");
         signinPage.emailField.setValue(dataRepo.emailid);
         signinPage.createAccButton.click();
         
     });

     it("create account", function(){
         createAccount.genderMr.click();         
         createAccount.firstName.setValue(dataRepo.firstname);      
         createAccount.lastName.setValue(dataRepo.lastname);       
         createAccount.password.setValue(dataRepo.password);    
         createAccount.companyName.setValue(dataRepo.companyname);    
         createAccount.companyAddress.setValue(dataRepo.companyaddress);        
         createAccount.cityName.setValue(dataRepo.cityname);       
         createAccount.stateName.selectByVisibleText(dataRepo.statename);        
         createAccount.zipCode.setValue(dataRepo.zipcode);        
         createAccount.mobileNumber.setValue(dataRepo.mobilenumber);
         createAccount.addressAlias.setValue(dataRepo.addressalias);
         createAccount.register.click();
         createAccount.pageHeading.waitForDisplayed();
         const accName = createAccount.accountName.getText();
         expect(accName).toEqual(dataRepo.firstname+" "+dataRepo.lastname);
    });

});