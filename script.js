function validatePasswords() {
    let passwordInput = document.getElementById("password");
    let confirmPasswordInput = document.getElementById("confirmpassword")
    let message = document.getElementsByClassName('error-message');
    console.log(message);
    if (!passwordInput.checkValidity() || !confirmPasswordInput.checkValidity()){
        message[0].innerHTML = '*Not a valid password';
        passwordInput.classList.add('invalid');
        confirmPasswordInput.classList.add('invalid');
    } else if (passwordInput.value != confirmPasswordInput.value) {
        message[0].textContent = '*Passwords do not match';       
        passwordInput.classList.add('invalid');  
        confirmPasswordInput.classList.add('invalid');   
    } else {
        if (passwordInput.classList.contains("invalid")) passwordInput.classList.remove('invalid');
        if (confirmPasswordInput.classList.contains("invalid")) confirmPasswordInput.classList.remove('invalid');
    }
}

const form = document.getElementsByTagName('form');
const createAccountButton = document.getElementById("createAccount");
const inputElements = document.getElementsByTagName('input');
createAccountButton.addEventListener('click', () => {
    if (form[0].checkValidity()) {
        //action for submit
    } else {

        Array.prototype.forEach.call(inputElements, input => {
            console.log(input.value.length);
            if (input.checkValidity() && input.value.length != 0) {
                if (input.classList.contains('invalid')) input.classList.remove('invalid');
            } else {
                if (!input.classList.contains('invalid')) input.classList.add('invalid');
            }
        })
    }
});

document.getElementById('confirmpassword').addEventListener('input', () => validatePasswords());
document.getElementById('password').addEventListener('input', () => validatePasswords());