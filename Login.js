let email = document.getElementById("email");
let pwd = document.getElementById("pwd");

function validate() {
     //email validation//
     let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/
     if(!regexp.test(email.value.trim())){
         email.innerHTML = "Invalid email";
         email.style.color="red";
         email.style.border = "2px solid red";
         return false;
     }
     else{
        email.innerHTML = "Valid email";
        email.style.color = "green";
         email.style.border = "2px solid green";
     }
 
     //password validation//
     let regpwd = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/
     if(regpwd.test(pwd.value)){
         if(pwd.value.length<8){
             pwd.innerHTML = "Weak Password";
             pwd.style.color = "red";
             pwd.style.border = "2px solid red";
             return false;
         }
         else if(pwd.value.length<16){
            pwd.innerHTML = "Medium Strength";
            pwd.style.color = "orange";
             pwd.style.border = "2px solid orange";
         }
         else{
            pwd.innerHTML = "Strong Password";
            pwd.style.color = "green";
             pwd.style.border = "2px solid green";
         }
        }
     else{
        pwd.innerHTML = "Invalid";
        pwd.style.color = "red";
        pwd.style.border = "2px solid red";
         return false;
     }
 
    }