let email = document.getElementById("email");
let pwd = document.getElementById("pwd");
let pawd = document.getElementById("pawd");
let number = document.getElementById("number");



function validation() {
    //email validation//
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/
    if (!regexp.test(email.value.trim())) {
        email.innerHTML = "Invalid email";
        email.style.color = "red";
        email.style.border = "2px solid red";
        return false;
    } else {
        email.innerHTML = "Valid email";
        email.style.color = "green";
        email.style.border = "2px solid green";
    }

    //password validation//
    let regpwd = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/
    if (regpwd.test(pwd.value)) {
        if (pwd.value.length < 8) {
            pwd.innerHTML = "Weak Password";
            pwd.style.color = "red";
            pwd.style.border = "2px solid red";
            return false;
        } else if (pwd.value.length < 16) {
            pwd.innerHTML = "Medium Strength";
            pwd.style.color = "orange";
            pwd.style.border = "2px solid orange";
        } else {
            pwd.innerHTML = "Strong Password";
            pwd.style.color = "green";
            pwd.style.border = "2px solid green";
        }
    } else {
        pwd.innerHTML = "Invalid password";
        pwd.style.color = "red";
        pwd.style.border = "2px solid red";
        return false;
    }

    // confirm password valdation//
    let regpawd = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/
    if (regpawd.test(pawd.value)) {
        if (pawd.value.length < 8) {
            pawd.innerHTML = "Weak Password";
            pawd.style.color = "red";
            pawd.style.border = "2px solid red";
            return false;
        } else if (pawd.value.length < 16) {
            pawd.innerHTML = "Medium Strength";
            pawd.style.color = "orange";
            pawd.style.border = "2px solid orange";
        } else {
            pawd.innerHTML = "Strong Password";
            pawd.style.color = "green";
            pawd.style.border = "2px solid green";
        }
    } else {
        pawd.innerHTML = "Invalid password";
        pawd.style.color = "red";
        pawd.style.border = "2px solid red";
        return false;
    }

    //phone number validation//
    let regnum = /^(\d{10})|(\d{4}-\d{3}-\d{3})|(\d{3}-\d{3}-\d{4})|(\d{3}.\d{3}.\d{4})$/
    if (!regnum.test(number.value)) {
        number.innerHTML = "Invalid";
        number.style.color = "red";
        number.style.border = "2px solid red";
        return false;
    } else {
        number.innerHTML = "Valid";
        number.style.color = "green";
        number.style.border = "2px solid green";
    }

}
