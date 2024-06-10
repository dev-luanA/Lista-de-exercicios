document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const messageDiv = document.getElementById('message');

    // Hardcoded user data for validation
    const userData = {
        username: 'luana',
        password: '123'
    };

    // Check if the user is already logged in
    if (localStorage.getItem('isLoggedIn') === 'true') {
        showMessage(`Bem-vindo de volta, ${userData.username}!`);
        loginForm.style.display = 'none';
    }

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === userData.username && password === userData.password) {
            localStorage.setItem('isLoggedIn', 'true');
            showMessage(`Bem-vindo, ${username}!`);
            loginForm.style.display = 'none';
        } else {
            showMessage('Usuário ou senha incorretos. Tente novamente.', true);
        }
    });

    function showMessage(message, isError = false) {
        messageDiv.textContent = message;
        messageDiv.style.color = isError ? 'red' : 'white';
    }
});
