const contenedor = document.getElementById("contenedor-productos");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalTitulo = document.getElementById("modal-titulo");
const cerrar = document.getElementById("cerrar");

productos.forEach(prod => {
  const card = document.createElement("div");
  card.classList.add("producto-card");

  card.innerHTML = `
    <img src="${prod.image}" alt="${prod.nombre}" style="width:120px;">
    <p>${prod.nombre}</p>
    <button class="boton-precio">$${prod.precio}</button>
  `;

  // ▶️ Cuando clickeás la tarjeta → abre el modal
  card.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = prod.image;
    modalTitulo.textContent = prod.nombre;
  });

  contenedor.appendChild(card);
});

// ❌ cerrar modal
cerrar.addEventListener("click", () => {
  modal.style.display = "none";
});

// cerrar clickeando afuera
modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});
