const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (!validateEmail(email)) {
        alert('Будь ласка, введіть правильну електронну адресу');
        return;
    }

    if (password.length < 6) {
        alert('Пароль повинен містити принаймні 6 символів');
        return;
    }

    if (password !== confirmPassword) {
        alert('Паролі не співпадають');
        return;
    }

    alert('Ви успішно зареєстровані!');
});

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}
