const url = "https://6818a2da5a4b07b9d1d017b1.mockapi.io/Description"
const autos = document.querySelector(".autos")
let resultados = ''








const mostrar = (articulos) => {
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
        `
    });
    fondo5.innerHTML = resultados
}








fetch(url)
    .then(res => res.json())
    .then(data => mostrar(data))
    .catch(err => console.error("Error al obtener datos:", err))