
function passwordsMatch() {
    const passwords = document.querySelectorAll('input[type=password]');
    if (passwords.item(0).value !== passwords.item(1).value) {
        passwords.forEach((pw) => {
            pw.setAttribute('class', 'error');
        })
        document.querySelector('#warning-text').textContent = '* Passwords do not match';
    } else {
        passwords.forEach((pw) => {
            pw.setAttribute('class', '');
        })
        document.querySelector('#warning-text').textContent = '';
    }
}

const confirm = document.querySelector('#password_confirm');
confirm.addEventListener('keyup', () => {
    passwordsMatch();
})