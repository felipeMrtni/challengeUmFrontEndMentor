
function showError (errorElement, errorMessage){
    //adds class "display__error" to element "error+(errorElement)"
    document.querySelector("."+errorElement).classList.add("display__error")
    //adds the text message in the html <span class="error+(errorElement)">(errorMessage)<span>
    document.querySelector("."+errorElement).innerHTML = errorMessage;
}

function clearError(){
    let errors = document.querySelectorAll(".error");
    for(let error of errors){
        error.classList.remove("display__error")
    }
}


//get the form class="form" from HTML
let form = document.forms['sign_up_form'];

form.onsubmit = function(event) {

    

    clearError();

    //checks if firstname.value of the form is empty
    if(form.firstname.value ===""){
        //if true, call function showError and sends the class element and the html message
        showError("firstname__error", "First Name cannot be empty")
        //return false to prevent submition
        return false;
    }
    if(form.lastname.value ===""){
        showError("lastname__error", "Last Name cannot be empty")
        return false;
    }
    if(form.email.value ===""){
        showError("email__error", "Email cannot be empty")
        return false;
    }
    if(form.password.value ===""){
        showError("password__error", "passowrd cannot be empty")
        return false;
    }

    event.preventDefault();
}
