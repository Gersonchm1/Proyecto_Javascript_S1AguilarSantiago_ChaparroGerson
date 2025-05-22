document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('login');

    loginBtn.addEventListener('click', () => {
        const inputEmail = document.querySelector('#email').value;
        const inputPassword = document.querySelector('#password').value;

        if (inputEmail === 'example@gmail.com' && inputPassword === '12345') {
            
        } else {
            alert('ERROR EN LA AUTENTICACIÓN');
            alert('Contraseña por defecto: 12345');
        }
    });
});