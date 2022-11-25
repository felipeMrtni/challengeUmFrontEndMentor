//get the form class="form" from HTML
let form = document.forms['sign_up_form'];


function checkForm(){
    let firstnameRef = form.firstname.value;
    let lastnameRef = form.lastname.value;
    let emailRef = form.email.value;
    let passowrdRef = form.password.value;
    
    //checks if firstname.value of the form is empty
    if(firstnameRef ===""){
        //if true, call function showError and sends the class element and the html message
        showError("firstname__error", "First Name cannot be empty!");
        showIconError("firstname__icon");
        borderColor("firstname__input");
        // return false to prevent submition if wanted
        // return false;
    } else if (checkFormRules(firstnameRef, "firstname__error", "First Name must contain at least 3 letters. No numbers!","firstname__icon", "firstname__input"));

    if(lastnameRef ===""){
        showError("lastname__error", "Last Name cannot be empty!");
        showIconError("lastname__icon");
        borderColor("lastname__input")
        // return false;
    } else if (checkFormRules(lastnameRef, "lastname__error", "Last Name must contain at least 3 letters. No numbers!", "lastname__icon", "lastname__input"));

    if(emailRef ===""){
        showError("email__error", "Email cannot be empty!");
        // checkEmailForm(emailRef, "email__error", "Email not valid!")
        showIconError("email__icon");
        borderColor("email__input")
        // return false;
    }
    if(passowrdRef ===""){
        showError("password__error", "passowrd cannot be empty");
        // showRules("Password Invalid");
        showIconError("password__icon");
        borderColor("password__input")
        // return false;
    }
}

function showError (errorElement, errorMessage){
    let warnings = document.querySelector("."+errorElement);
    //adds class "display__error" to element "error+(errorElement)"
    warnings.classList.add("display__error")
    //adds the text message in the html <span class="error+(errorElement)">(errorMessage)<span>
    warnings.innerHTML = errorMessage;
}

function checkFormRules (inputRef, ruleElement, ruleMessage, passRef, borderRef){
    let namesRules = /^[A-Za-z]{3,30}$/; 
    if(namesRules.test(inputRef) === false) {
        showIconError(passRef);
        borderColor(borderRef);
        let rules = document.querySelector("."+ruleElement);
        rules.classList.add("display__error");
        rules.innerHTML = ruleMessage;
    }
}

function showIconError (iconElement) {

    let icon = document.querySelector("."+iconElement);
    icon.classList.add("display__icon")

}

function borderColor (inputElement) {
    let inputBorders = document.querySelector("."+inputElement);
    inputBorders.classList.add("display__border")
}

function clearError(){
    let errors = document.querySelectorAll(".error");
    for(let error of errors){
            error.classList.remove("display__error")
        }
        let icons = document.querySelectorAll(".icon");
        for(let icon of icons){
            icon.classList.remove("display__icon")
        }
        let borders = document.querySelectorAll(".inputarea");
        for(let inputarea of borders ){
            inputarea.classList.remove("display__border")
        }
        let rules = document.querySelectorAll(".error");
        for(let error of rules){
            error.classList.remove("display__error")
    }
}


form.onsubmit = function(event) {

    event.preventDefault();

    clearError();
    checkForm()
    
}

