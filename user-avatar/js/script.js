const url = "https://6818a2da5a4b07b9d1d017b1.mockapi.io/People"

let resultados = ''








const mostrar = (articulos) => {
    articulos.forEach(articulo => {
        resultados += `
         <main class="container">
            <section class="card">
                <div class="front box">
                    <h1>${articulo.Name}</h1>
                    <p class="price">${articulo.equipo}</p>
                </div>
                <div class="rigth box">
                    <h2>Detalle</h2>
                    <ul>
                        <li>Rol: ${articulo.rol}</li>
                        <li>Equipo: ${articulo.equipo}</li>
                        
                       
                    </ul>
                    <button>Seleccionar</button>
                </div>
            </section>
            <section class="img-container">
                <img src="${articulo.imga}" alt="${articulo.Name}" />
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




