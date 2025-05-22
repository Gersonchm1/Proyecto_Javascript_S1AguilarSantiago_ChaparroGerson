document.addEventListener('DOMContentLoaded', () => {
    const btnEscuderias = document.querySelector('.container--escuderias__titulo button');
    const btnVehiculos = document.querySelector('.container--vehiculos__titulo button');
    const btnPilotos = document.querySelector('.container--pilotos__titulo button');
    const btnCircuitos = document.querySelector('.container--circuitos__titulo button');

    btnEscuderias.addEventListener('click', () => {
        window.location.href = '../user';
    });

    btnVehiculos.addEventListener('click', () => {
        window.location.href = '../user-vehiculos/index.html';
    });

    btnPilotos.addEventListener('click', () => {
        window.location.href = '../user-avatar/index.html';
    });

    btnCircuitos.addEventListener('click', () => {
        window.location.href = '../user-mapas/index.html';
    });
});
