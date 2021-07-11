let btn1 = document.querySelector(".close");
let container = document.querySelector(".container");
let btn2 = document.querySelector("button");
let fname = document.getElementById("name");
let lname = document.getElementById("lname");
let email = document.getElementById("email");
let password = document.getElementById("password");
let rePassword = document.getElementById("repassword");
let contact = document.getElementById("contact");

btn1.addEventListener("click", function(){
   container.style.display = "none";
});

btn2.addEventListener("click", function(event){
   event.preventDefault();
   signIn();
});

function signIn() {
   let fnameValue = fname.value.trim();
   let lnameValue = lname.value.trim();
   let emailValue = email.value.trim();
   let passwordValue = password.value.trim();
   let rePasswordValue = rePassword.value.trim();
   let contactValue = contact.value.trim();

   if(fnameValue === "") {
      onError(fname, "first name cannot be empty");
   }
   else {
      onSuccess(fname);
   }
   if(lnameValue === "") {
      onError(lname, "lastname cannot be empty");
   }
   else {
      onSuccess(lname);
   }
   if(emailValue === "") {
      onError(email, "email cannot be empty");
   }
   else {
      onSuccess(email);
   }
   if(passwordValue === "") {
      onError(password, "password cannot be empty");
   }
   else if(passwordValue.length < 6) {
      onError(password, "password must have atleast 6 character");
   }
   else if(passwordValue.search(/[A-Z]/) === -1) {
      onError(password, "password have must atleast one uppercase");
   }
   else if(passwordValue.search(/[a-z]/) === -1) {
      onError(password, "password must have atleast one lowercase");
   }
   else if(passwordValue.search(/[0-9]/) === -1) {
      onError(password, "password must have atleast one number");
   }
   else{
      onSuccess(password);
   }

   if(rePasswordValue  === "") {
      onError(rePassword, "password cannot be empty");
   }
   else if(passwordValue !== rePasswordValue) {
      onError(rePassword, "password does not match");
   }
   else{
      onSuccess(rePassword);
   }
   if(contactValue === "") {
      onError(contact, "phone no cannot be empty");
   }
   else{
      onSuccess(contact);
   }
}

function onSuccess(input) {
   const formControl = input.parentElement;
   const small = formControl.querySelector("small");
   formControl.className = "form-control success";
}
function onError(input, message) {
   const formControl = input.parentElement;
   const small = formControl.querySelector("small");
   formControl.className = "form-control error";
   small.innerText = message;
}