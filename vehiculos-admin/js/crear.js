const url = 'https://6818a2da5a4b07b9d1d017b1.mockapi.io/Description';

const formArticulo = document.querySelector('form');
const quipo = document.getElementById('equipo');
const modelo = document.getElementById('modelo');
const motor = document.getElementById('motor');
const velocidadMax = document.getElementById('velocidadMax');
const aceleracion = document.getElementById('aceleracion');
const velocidadPromedio = document.getElementById('velocidadPromedio');
const img = document.getElementById('img');
const modal = document.getElementById('modalArticulo');
const btnCrear = document.getElementById('btnCrear');
const btnCerrar = document.getElementById('btnCerrarModal');
const btnCerrar2 = document.getElementById('btnCerrarModal2');




let resultados = '';

// Función para mostrar artículos (suponiendo que la tienes)
const mostrar = (articulos) => {
  // Tu código para mostrar los datos en la UI
  // Por ejemplo:
  resultados = '';
  articulos.forEach(articulo => {
    resultados += `
     <main class="container">
            <section class="card">
                <div class="front box">
                    <h1>${articulo.equipo}</h1>
                    <p class="price">${articulo.modelo}</p>
                </div>
                <div class="rigth box">
                    <h2>Detalle</h2>
                    <ul>
                        <li>Velocidad Max: ${articulo.velocidadMax}</li>
                        <li>0-100 km/h: ${articulo.aceleracion}</li>
                        <li>Peso: ${articulo.velocidadPromedio}</li>
                        <li>Motor: ${articulo.motor}</li>
                       
                    </ul>
                    <button>Seleccionar</button>
                </div>
            </section>
            <section class="img-container">
                <img src="${articulo.img}" alt="${articulo.name}" />
            </section>
         </main>
     
    `;
  });
  const fondo5 = document.querySelector('.fondo5');
  fondo5.innerHTML = resultados;
};
btnCerrar2.addEventListener('click', () => {
  modal.style.display = 'none';
});



btnCrear.addEventListener('click', () => {
  modal.style.display = 'flex';
});


btnCerrar.addEventListener('click', () => {
  modal.style.display = 'none';
});


window.addEventListener('click', e => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});



formArticulo.addEventListener('submit', e => {
  e.preventDefault();

  const nuevoAvatar = {
    equipo: equipo.value,
    modelo: modelo.value,
    motor: motor.value,
    velocidadMax: velocidadMax.value,
    aceleracion: aceleracion.value,
    velocidadPromedio: velocidadPromedio.value,
    img: img.value
  };

  fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(nuevoAvatar)
  })
  .then(res => res.json())
  .then(data => {
    console.log('Nuevo avatar creado:', data);

   
    formArticulo.reset();

    
    modal.style.display = 'none';

   
    fetch(url)
      .then(res => res.json())
      .then(data => mostrar(data));
  })
  .catch(err => console.error('Error al crear avatar:', err));
});


fetch(url)
  .then(res => res.json())
  .then(data => mostrar(data))
  .catch(err => console.error('Error al obtener datos:', err));
