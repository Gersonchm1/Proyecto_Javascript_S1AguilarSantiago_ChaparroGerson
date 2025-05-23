const url = 'https://6818a2da5a4b07b9d1d017b1.mockapi.io/People';

const formArticulo = document.querySelector('form');
const Name = document.getElementById('Name');
const rol = document.getElementById('rol');
const equipo = document.getElementById('equipo');
const imga = document.getElementById('imga');
const modal = document.getElementById('modalArticulo');
const btnCrear = document.getElementById('btnCrear');
const btnCerrar = modal.querySelector('.btn-close');

let resultados = '';


const mostrar = (articulos) => {
  resultados = '';
  articulos.forEach(articulo => {
    resultados += `
      <main class="container">
        <section class="card">
          <div class="front box">
            <h1>${articulo.Name}</h1>
            <p class="price">${articulo.equipo}</p>
          </div>
          <div class="rigth box">
            <h2>Detalle</h2>  x
            
            <ul>
              <li>Rol: ${articulo.rol}</li>
              <li>Equipo: ${articulo.equipo}</li>
               <button class="btn-eliminar-avatar" data-id="${articulo.id}">-</button>
               
            </ul>
            
            <button>Seleccionar</button>
            
             
       
            
          </div>
          
        </section>
        <section class="img-container">
          <img src="${articulo.imga}" alt="${articulo.Name}" />
        </section>
      </main>
    `;
  });
  const fondo5 = document.querySelector('.fondo5');
  fondo5.innerHTML = resultados;
};


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
    Name: Name.value,
    rol: rol.value,
    equipo: equipo.value,
    imga: imga.value
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
