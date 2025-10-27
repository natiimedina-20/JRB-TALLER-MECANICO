// Importa tu array de productos desde main.js
import productos from "../pages/main.js"; // Ajusta la ruta según tu estructura

// Función para renderizar las tarjetas
function renderProductos(lista) {
  const contenedor = document.getElementById("productos");
  if (!contenedor) {
    console.warn("⚠️ No se encontró #productos en el DOM");
    return;
  }

  contenedor.innerHTML = ""; // limpia el contenedor

  lista.forEach((producto) => {
    const card = document.createElement("article");
    card.className = "tarjeta";
    card.dataset.id = producto.id;

    card.innerHTML = `
      <h3 class="tarjeta-titulo">${producto.nombre}</h3>
      <p class="tarjeta-categoria">${producto.categoria}</p>
      <img src="${producto.image || '../assets/img/no-image.png'}" 
           alt="${producto.nombre}" 
           class="tarjeta-imagen">
      <p class="tarjeta-descripcion">${producto.descripcion}</p>
      <div class="tarjeta-footer">
        <span class="tarjeta-precio">$${producto.precio}</span>
        <span class="tarjeta-stock">Stock: ${producto.cantidad}</span>
      </div>
      <div class="tarjeta-acciones">
        <button type="button" class="btn-detalle" data-id="${producto.id}">Ver detalles</button>
        <button type="button" class="btn-agregar" data-id="${producto.id}">Agregar</button>
      </div>
    `;

    contenedor.appendChild(card);
  });
}

// Renderiza las tarjetas al cargar el DOM
document.addEventListener("DOMContentLoaded", () => {
  renderProductos(productos);
});
