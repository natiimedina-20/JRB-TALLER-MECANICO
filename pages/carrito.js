// carrito.js (ponelo tal cual en ./carrito.js y se carga como module)
const STORAGE_KEY = "jrb_carrito_v1";

// Estado del carrito (se persiste)
let carrito = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");

// --- UTILIDADES ---
function guardarCarrito() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(carrito));
  actualizarBadge();
}

function calcularTotal() {
  return carrito.reduce((acc, it) => acc + it.precio * it.cantidad, 0);
}

// Si el botón del carrito no tiene "badge", lo crea
function actualizarBadge() {
  const btn = document.getElementById("carrito-button");
  if (!btn) return;

  // buscamos o creamos span.badge
  let badge = btn.querySelector(".carrito-badge");
  const totalCantidad = carrito.reduce((acc, i) => acc + i.cantidad, 0);

  if (!badge) {
    badge = document.createElement("span");
    badge.className = "carrito-badge";
    // estilos básicos si no tenés CSS para badge
    badge.style.cssText = "position:absolute; right:6px; top:6px; background:#e74c3c; color:#fff; padding:2px 6px; border-radius:12px; font-size:13px;";
    btn.style.position = "relative";
    btn.appendChild(badge);
  }

  badge.textContent = totalCantidad > 0 ? totalCantidad : "";
}

// --- RENDER DEL DROPDOWN ---
function crearDropdownSiNoExiste() {
  let dropdown = document.getElementById("dropdown-carrito");
  if (!dropdown) {
    dropdown = document.createElement("div");
    dropdown.id = "dropdown-carrito";
    // si tenés carrito.css con estilos para #dropdown-carrito, no hace falta más
    // agregamos HTML base
    dropdown.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
        <strong>Tu carrito</strong>
        <button id="vaciar-carrito" style="background:transparent;border:none;cursor:pointer;">Vaciar</button>
      </div>
      <ul id="lista-carrito" style="padding:0; margin:0; list-style:none;"></ul>
      <div id="carrito-footer" style="margin-top:8px;">
        <hr>
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <strong>Total:</strong>
          <span id="carrito-total"></span>
        </div>
        <div style="margin-top:10px; display:flex; gap:8px; justify-content:flex-end;">
          <button id="cerrar-carrito" style="padding:6px 8px; border-radius:6px; cursor:pointer;">Cerrar</button>
          <button id="checkout" style="padding:6px 8px; border-radius:6px; cursor:pointer; background:#2ecc71; color:white; border:none;">Pagar</button>
        </div>
      </div>
    `;
    document.body.appendChild(dropdown);

    // eventos del dropdown
    document.getElementById("cerrar-carrito").addEventListener("click", () => toggleDropdown(false));
    document.getElementById("vaciar-carrito").addEventListener("click", () => {
      carrito = [];
      guardarCarrito();
      renderCarrito();
    });
    document.getElementById("checkout").addEventListener("click", () => {
      alert("Funcionalidad de pago no implementada (ej: integrar pasarela).");
    });
  }
  return dropdown;
}

function renderCarrito() {
  const dropdown = crearDropdownSiNoExiste();
  const lista = dropdown.querySelector("#lista-carrito");
  const totalSpan = dropdown.querySelector("#carrito-total");

  lista.innerHTML = "";

  if (carrito.length === 0) {
    lista.innerHTML = `<li style="padding:10px; text-align:center;">El carrito está vacío</li>`;
    totalSpan.textContent = "$0";
    return;
  }

  carrito.forEach(item => {
    const li = document.createElement("li");
    li.style.cssText = "display:flex; gap:8px; padding:8px 0; border-bottom:1px solid rgba(0,0,0,0.06); align-items:center;";
    li.dataset.id = item.id;

    li.innerHTML = `
      <div style="width:56px; flex-shrink:0;">
        <img src="${item.image || '../assets/no-image.png'}" alt="${item.nombre}" style="width:56px; height:56px; object-fit:cover; border-radius:6px;">
      </div>
      <div style="flex:1;">
        <div style="font-weight:700;">${item.nombre}</div>
        <div style="font-size:13px; color:#555;">$${(item.precio).toLocaleString()}</div>
        <div style="margin-top:6px; display:flex; gap:6px; align-items:center;">
          <button class="qty-decrease" data-id="${item.id}" style="padding:2px 6px; cursor:pointer;">−</button>
          <span style="min-width:22px; text-align:center;">${item.cantidad}</span>
          <button class="qty-increase" data-id="${item.id}" style="padding:2px 6px; cursor:pointer;">+</button>
          <button class="remove-item" data-id="${item.id}" style="margin-left:8px; background:#e74c3c; color:#fff; border:none; padding:4px 6px; border-radius:6px; cursor:pointer;">Eliminar</button>
        </div>
      </div>
      <div style="min-width:80px; text-align:right; font-weight:700;">$${(item.precio * item.cantidad).toLocaleString()}</div>
    `;

    lista.appendChild(li);
  });

  totalSpan.textContent = "$" + calcularTotal().toLocaleString();

  // attach listeners (delegación simple)
  lista.querySelectorAll(".qty-decrease").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = parseInt(btn.dataset.id);
      cambiarCantidad(id, -1);
    });
  });
  lista.querySelectorAll(".qty-increase").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = parseInt(btn.dataset.id);
      cambiarCantidad(id, +1);
    });
  });
  lista.querySelectorAll(".remove-item").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = parseInt(btn.dataset.id);
      quitarProducto(id);
    });
  });
}

function toggleDropdown(force) {
  const dropdown = crearDropdownSiNoExiste();
  const isHidden = getComputedStyle(dropdown).display === "none" || dropdown.classList.contains("hidden");
  const shouldShow = typeof force === "boolean" ? force : isHidden;
  if (shouldShow) {
    dropdown.style.display = "block";
    dropdown.style.position = "absolute";
    dropdown.style.top = (document.getElementById("carrito-button").getBoundingClientRect().bottom + 6) + "px";
    dropdown.style.right = "10px";
    dropdown.style.width = "320px";
    dropdown.style.zIndex = 10000;
    dropdown.classList.remove("hidden");
    renderCarrito();
  } else {
    dropdown.style.display = "none";
    dropdown.classList.add("hidden");
  }
}

// --- OPERACIONES SOBRE EL CARRITO ---
function agregarAlCarritoPorId(id, cantidad = 1) {
  // para poder completar la info (nombre/precio/image) buscamos en tu array "productos"
  // asumimos que existe en window o en un módulo exportado
  // varias opciones: si "productos" no existe globalmente intentamos buscarlo en window.productos
  const listaProductos = (typeof window.productos !== "undefined") ? window.productos : (typeof productos !== "undefined" ? productos : null);

  if (!listaProductos) {
    console.error("No se encontró el array 'productos' en scope. Asegurate de que main.js exporte/defina 'productos' globalmente.");
    return;
  }

  const prod = listaProductos.find(p => p.id === id);
  if (!prod) return;

  const existente = carrito.find(i => i.id === id);
  if (existente) {
    existente.cantidad += cantidad;
    if (existente.cantidad < 1) existente.cantidad = 1;
  } else {
    carrito.push({
      id: prod.id,
      nombre: prod.nombre,
      precio: prod.precio,
      cantidad: cantidad,
      image: prod.image
    });
  }
  guardarCarrito();
  renderCarrito();
}

// Cambia cantidad (pos/neg)
function cambiarCantidad(id, delta) {
  const it = carrito.find(i => i.id === id);
  if (!it) return;
  it.cantidad += delta;
  if (it.cantidad <= 0) {
    // eliminar si llega a 0
    carrito = carrito.filter(i => i.id !== id);
  }
  guardarCarrito();
  renderCarrito();
}

function quitarProducto(id) {
  carrito = carrito.filter(i => i.id !== id);
  guardarCarrito();
  renderCarrito();
}

// --- ESCUCHA CLICS en botones "Agregar" (delegación global) ---
document.addEventListener("click", (e) => {
  const target = e.target.closest && e.target.closest(".btn-agregar");
  if (target) {
    const id = parseInt(target.dataset.id);
    if (!Number.isNaN(id)) {
      agregarAlCarritoPorId(id, 1);
      // pequeño feedback visual
      target.animate([{ transform: "scale(1.06)" }, { transform: "scale(1)" }], { duration: 140 });
    }
  }
});

// abrir/cerrar con el botón del header (ya lo tenés en el HTML como #carrito-button)
const botonCarrito = document.getElementById("carrito-button");
if (botonCarrito) {
  botonCarrito.addEventListener("click", (e) => {
    e.stopPropagation();
    const dropdown = crearDropdownSiNoExiste();
    toggleDropdown();
  });
}

// cerrar si clickeás afuera
document.addEventListener("click", (e) => {
  const dropdown = document.getElementById("dropdown-carrito");
  if (!dropdown) return;
  const btn = document.getElementById("carrito-button");
  if (dropdown.contains(e.target) || (btn && btn.contains(e.target))) return;
  // si está visible, lo ocultamos
  if (!dropdown.classList.contains("hidden")) toggleDropdown(false);
});

// inicialización
renderCarrito();
actualizarBadge();

console.log("carrito.js cargado correctamente");
