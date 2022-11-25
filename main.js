
function checkForm(){
    //checks if firstname.value of the form is empty
    if(form.firstname.value ===""){
        //if true, call function showError and sends the class element and the html message
        showError("firstname__error", "First Name cannot be empty");
        showIconError("firstname__icon");
        // return false to prevent submition if wanted
        // return false;
    }
    if(form.lastname.value ===""){
        showError("lastname__error", "Last Name cannot be empty")
        showIconError("lastname__icon");
        // return false;
    }
    if(form.email.value ===""){
        showError("email__error", "Email cannot be empty")
        showIconError("email__icon");
        // return false;
    }
    if(form.password.value ===""){
        showError("password__error", "passowrd cannot be empty")
        showIconError("password__icon");
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

function showIconError (iconElement) {
    let icon = document.querySelector("."+iconElement);
    icon.classList.add("display__icon")

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
}

//get the form class="form" from HTML
let form = document.forms['sign_up_form'];

form.onsubmit = function(event) {

    event.preventDefault();

    clearError();
    checkForm()
}

