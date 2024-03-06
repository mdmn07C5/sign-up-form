function passwordsMatch() {
    const password = document.querySelector('#password');
    const confirm = document.querySelector('#password_confirm');
    const pwInputFields = document.querySelectorAll('.error');
    if (password.value !== confirm.value) {
        pwInputFields.forEach((inputField) => {
            inputField.style.borderColor = "red";
        })

        const warningText = document.querySelector('#warning-text');
        warningText.textContent = '* Passwords do not match';
        warningText.style.color = 'red';
    } else {
        console.log('this triggered');
        pwInputFields.forEach((inputField) => {
            inputField.style.borderColor = "green";
        })
        const warningText = document.querySelector('#warning-text');
        warningText.textContent = '';
    }
}

const confirm = document.querySelector('#password_confirm');
confirm.addEventListener('keyup', () => {
    passwordsMatch();
})