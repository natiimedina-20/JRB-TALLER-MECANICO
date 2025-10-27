// index.js

// Importa el array de productos desde galeria.js
import imagenesIndex from "./galeria.js";


// Función para renderizar las tarjetas
function renderProductos(lista) {
  const contenedor = document.querySelector(".galeria"); // Contenedor donde se insertan las tarjetas
  if (!contenedor) {
    console.warn("⚠️ No se encontró .galeria en el DOM");
    return;
  }

  contenedor.innerHTML = ""; // Limpia el contenedor antes de agregar tarjetas

  lista.forEach((imagenesIndex) => {
    const card = document.createElement("article");
    card.className = "tarjeta";
    card.dataset.id = imagenesIndex.id;

    card.innerHTML = `
      <h3 class="tarjeta-titulo">${imagenesIndex.nombre}</h3>
      <img src="${imagenesIndex.image || '../assets/img/no-image.png'}" 
           alt="Producto ${imagenesIndex.id}" 
           class="tarjeta-imagen">
    `;

    contenedor.appendChild(card);
  });
}

// Renderiza las tarjetas cuando el DOM está listo
document.addEventListener("DOMContentLoaded", () => {
  renderProductos(imagenesIndex);
});
