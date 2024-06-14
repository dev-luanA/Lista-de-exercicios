document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const messageDiv = document.getElementById('message');
    const logoutButton = document.getElementById('logoutButton');

    const userData = {
        username: 'luana',
        password: '123'
    };

    if (localStorage.getItem('isLoggedIn') === 'true') {
        showMessage(`Bem-vindo de volta, ${userData.username}!`);
        loginForm.style.display = 'none';
        logoutButton.style.display = 'block';
    }

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === userData.username && password === userData.password) {
            localStorage.setItem('isLoggedIn', 'true');
            showMessage(`Bem-vindo, ${username}!`);
            loginForm.style.display = 'none';
            logoutButton.style.display = 'block';
        } else {
            showMessage('Usuário ou senha incorretos. Tente novamente.', true);
        }
    });

    logoutButton.addEventListener('click', () => {
        localStorage.removeItem('isLoggedIn');
        showMessage('');
        loginForm.style.display = 'block';
        logoutButton.style.display = 'none';
    });

    function showMessage(message, isError = false) {
        messageDiv.textContent = message;
        messageDiv.style.color = isError ? 'red' : 'white';
    }
});
