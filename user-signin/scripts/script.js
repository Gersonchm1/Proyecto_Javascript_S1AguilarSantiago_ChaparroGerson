document.getElementById('login').addEventListener('click', verificacion);

async function cambiarpg() {
    window.location.replace('../../user-mainPage/index.html');
}

async function verificacion() {
    const inputEmail = document.querySelector('#email').value;
    const inputPassword = document.querySelector('#password').value;

    if (inputEmail == 'example@gmail.com' && inputPassword == '12345') {
        cambiarpg();
    } else {
        alert('ERROR EN LA AUTENTICACIÓN');
        alert('Contraseña por defecto: 12345');
    }
}
