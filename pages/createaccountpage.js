class CreateAccount {

    get genderMr(){return $('#id_gender1');}
    get firstName(){return $('#customer_firstname');}
    get lastName(){return $('#customer_lastname');}
    get password(){return $('#passwd');}
    get companyName(){return $('#company');}
    get companyAddress(){return $('#address1');}
    get cityName(){return $('#city');}
    get stateName(){return $('#id_state');}
    get zipCode(){return $('#postcode');}
    get mobileNumber(){return $('#phone_mobile');}
    get addressAlias(){return $('#alias');}
    get register(){return $("//span[contains(text(),'Register')]");}
    get pageHeading(){return $("//h1[@class='page-heading']");}
    get accountName(){return $("//a[@class='account']/span");}
}

module.exports = new CreateAccount();