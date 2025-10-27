import productos from "./main.js";

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));
  const producto = productos.find((p) => p.id === id);
  const cont = document.getElementById("detalle-producto");

  if (!producto) {
    cont.innerHTML = "<p>Producto no encontrado.</p>";
    return;
  }

  cont.innerHTML = `
    <article class="tarjeta">
      <h2>${producto.nombre}</h2>
      <img src="${producto.image}" alt="${producto.nombre}" class="tarjeta-imagen">
      <p>${producto.descripcion}</p>
      <p><strong>Precio:</strong> $${producto.precio}</p>
      <p><strong>Stock:</strong> ${producto.cantidad}</p>
      <p><strong>Categoría:</strong> ${producto.categoria}</p>
      <button onclick="window.location.href='../index.html'">Volver al inicio</button>
    </article>
  `;
});
