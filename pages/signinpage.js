class SignInPage {

    get pageHeading(){return $("//h1[@class='page-heading']");}
    get emailField () { return $('#email_create');}
    get createAccButton () { return $("//form[@id='create-account_form']//span[1]");}
}

module.exports = new SignInPage();