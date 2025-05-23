const url = 'https://682d1fbe4fae18894754f1ee.mockapi.io/pistas';

const formArticulo = document.querySelector('form');
const name = document.getElementById('name');
const pais = document.getElementById('pais');
const longitud = document.getElementById('longitud');
const vueltas = document.getElementById('vueltas');
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
           <h1>${articulo.name}</h1>
            <div class="img-container">
              <img src="${articulo.img}" alt="${articulo.name}" />
            </div>
           
            <p class="price">${articulo.pais}</p>
          </div>
          <div class="rigth box">
            <div class="img-container">
              <img src="${articulo.img}" alt="${articulo.name}" />
            </div>
            <h2>Detalle</h2>
            <ul>
              <li>longitud: ${articulo.longitud}</li>
              <li>vueltas: ${articulo.vueltas}</li>
               <button class="btn-eliminar-avatar" data-id="${articulo.id}">-</button>
               
            </ul>
            <button>Seleccionar</button>
          </div>
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



const fondo5Container = document.querySelector('.fondo5'); 

fondo5Container.addEventListener('click', (e) => {
  if (e.target.classList.contains('btn-eliminar-avatar')) {
    const avatarId = e.target.dataset.id;
    
    alertify.confirm('Confirmar Eliminación', `¿Estás seguro de que quieres eliminar este avatar?`, 
      function(){
        eliminarAvatar(avatarId);
      }, 
      function(){ 
        alertify.error('Eliminación cancelada');
      }
    ).set('labels', {ok:'Sí, Eliminar', cancel:'Cancelar'});
  }
});


const eliminarAvatar = (id) => {
  fetch(`${url}/${id}`, {
    method: 'DELETE'
  })
  .then(res => {
    if (!res.ok) {
    
      return res.json().then(error => { throw new Error(error.message || 'Error al eliminar') });
    }
    return res.json(); 
  })
  .then(data => {
    console.log('Avatar eliminado:', data);
    alertify.success('Avatar eliminado correctamente!');
    
   
    fetch(url)
      .then(res => res.json())
      .then(data => mostrar(data))
      .catch(err => console.error('Error al re-obtener datos:', err));
  })
  .catch(err => {
    console.error('Error al eliminar avatar:', err);
    alertify.error(`Error al eliminar: ${err.message}`);
  });
};


fetch(url)
  .then(res => res.json())
  .then(data => mostrar(data))
  .catch(err => console.error('Error al obtener datos:', err));


const btnCerrarModal2 = document.getElementById('btnCerrarModal2');
if (btnCerrarModal2) {
    btnCerrarModal2.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}


const btnCerrarModalHeader = document.getElementById('btnCerrarModal');
if(btnCerrarModalHeader) {
    btnCerrarModalHeader.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}




formArticulo.addEventListener('submit', e => {
  e.preventDefault();

  const nuevoAvatar = {
    name: name.value,
    pais: pais.value,
    longitud: longitud.value,
    vueltas: vueltas.value,
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
