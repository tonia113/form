let btn1 = document.querySelector(".btn1");
let container = document.querySelector(".container2");
let button = document.querySelector(".close");
let btn2 = document.querySelector(".btn2");
let username = document.getElementById("user");
let password = document.getElementById("password");

btn1.addEventListener("click", function(){
    container.style.display = "flex"
});
button.addEventListener("click", function(){
    container.style.display = "none"
});

// formValidation
btn2.addEventListener("click", function(event){
    event.preventDefault();
    loginForm();
});

function loginForm() {
    let userNameValue = username.value.trim();
    let passValue = password.value.trim(); 

    if(userNameValue === "") {
        onError(username, "username cannot be empty")
    }
    else{
        onSuccess(username);
    }
    if(passValue === "") {
        onError(password, "password cannot be empty")
    }
    else if(passValue.length < 6) {
        onError(password, "password must have more than 6 character")
    }
    else if(passValue.search (/[A-Z]/) === -1) {
        onError(password, "password must have atleast one uppercase")
    }
    else if(passValue.search(/[a-z]/) ===-1) {
        onError(password, "password must have atleast one lowercase")
    }
    else {
        onSuccess(password);
    }
}

function onSuccess(input) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    formControl.className = "form-control success";
}
function onError(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small")
    formControl.className = "form-control error";
    small.innerText = message;
} 




