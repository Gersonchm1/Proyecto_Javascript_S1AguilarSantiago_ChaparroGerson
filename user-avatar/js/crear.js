const url  = 'https://6818a2da5a4b07b9d1d017b1.mockapi.io/People'

const formArticulo = document.querySelector('form')
const Name = document.getElementById('Name')
const rol = document.getElementById('rol')
const equipo = document.getElementById('equipo')
const imga = document.getElementById('imga')
let opcion = ''
const modal = document.getElementById('modalArticulo');
const btnCrear = document.getElementById('btnCrear');
const btnCerrar = modal.querySelector('[data-bs-dismiss="modal"]'); // botón cerrar

btnCrear.addEventListener('click', () => {
  modal.style.display = 'block';  // muestra el modal
});

btnCerrar.addEventListener('click', () => {
  modal.style.display = 'none';   // oculta el modal
});


const on = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if (e.target.closest(selector)) {
            handler(e)
        }
    })
}

