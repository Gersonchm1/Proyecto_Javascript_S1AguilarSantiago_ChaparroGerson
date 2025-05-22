const url = "https://682d1fbe4fae18894754f1ee.mockapi.io/pistas"

let resultados = ''








const mostrar = (articulos) => {
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
          <li>Rol: ${articulo.longitud}</li>
          <li>Equipo: ${articulo.vueltas}</li>
        </ul>
        <button>Seleccionar</button>
      </div>
    </section>
  </main>
        `
    });
    fondo5.innerHTML = resultados
}








fetch(url)
    .then(res => res.json())
    .then(data => mostrar(data))
    .catch(err => console.error("Error al obtener datos:", err))




