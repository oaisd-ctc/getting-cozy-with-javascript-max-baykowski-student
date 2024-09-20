const username=document.getElementById("username");
const email = document.getElementById("email");
const age=document.getElementById("age");
const form = document.getElementById("form");
form.addEventListener('submit', function (e) {
    console.log(email.value.indexOf("@")==-1 || email.value.indexOf(".")==-1);
    e.preventDefault();
    if(username.value.length<3) {
        e.preventDefault();
        document.getElementById("usernameErrorMSG").textContent="Username must be at least 3 characters in length.";
    }
        if(email.value.indexOf("@")==-1 || email.value.indexOf(".")==-1) {
        e.preventDefault();
        document.getElementById("emailErrorMSG").textContent="You did not enter a valid email address.";
    }
    if(age.value > 100 || age.value < 10) {
        e.preventDefault();
        document.getElementById("ageErrorMSG").textContent="Age must be between 10 and 100.";
    }
});