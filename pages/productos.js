import productos from "../pages/main.js"; // tu array de productos

// Renderiza las tarjetas
function renderProductos(lista) {
  const contenedor = document.getElementById("productos");
  if (!contenedor) return;

  contenedor.innerHTML = "";

  lista.forEach((p) => {
    const card = document.createElement("article");
    card.className = "tarjeta";
    card.dataset.id = p.id;

    card.innerHTML = `
      <h3 class="tarjeta-titulo">${p.nombre}</h3>
      <p class="tarjeta-categoria"><strong>Categoría:</strong> ${p.categoria}</p>
      <img src="${p.image || '../assets/img/no-image.png'}" 
           alt="${p.nombre}" 
           class="tarjeta-imagen">
      <p class="tarjeta-descripcion">${p.descripcion}</p>
      <div class="tarjeta-footer">
        <span class="tarjeta-precio"><strong>Precio:</strong> $${p.precio}</span>
        <span class="tarjeta-stock"><strong>Stock:</strong> ${p.cantidad}</span>
        <span class="tarjeta-id"><strong>ID:</strong> ${p.id}</span>
      </div>
    `;
    contenedor.appendChild(card);
  });
}

// Genera las categorías únicas automáticamente
function generarCategorias() {
  const filtro = document.getElementById("filtro-categoria");
  if (!filtro) return;

  // Obtiene categorías únicas
  const categorias = [...new Set(productos.map(p => p.categoria))];

  // Primero agregamos la opción "todos"
  filtro.innerHTML = `<option value="todos">Todas las categorías</option>`;

  // Agrega el resto de categorías
  categorias.forEach(cat => {
    const option = document.createElement("option");
    option.value = cat;
    option.textContent = cat;
    filtro.appendChild(option);
  });
}

// Aplica el filtro al cambiar el select
function aplicarFiltro() {
  const filtro = document.getElementById("filtro-categoria");
  if (!filtro) return;

  filtro.addEventListener("change", () => {
    const categoria = filtro.value;

    if (categoria === "todos") {
      renderProductos(productos);
    } else {
      const filtrados = productos.filter(
        p => p.categoria.toLowerCase() === categoria.toLowerCase()
      );
      renderProductos(filtrados);
    }
  });
}

// Ejecutar todo al cargar el DOM
document.addEventListener("DOMContentLoaded", () => {
  generarCategorias();   // genera automáticamente las categorías
  renderProductos(productos);  // renderiza todas al inicio
  aplicarFiltro();       // configura el filtro
});
