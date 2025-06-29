
  function mostrarCompra(nombreViaje, precio) {
    const mensaje = document.getElementById("compra-mensaje");
    mensaje.innerText = `✅ Agregaste "${nombreViaje}" al carrito.`;
    mensaje.classList.remove("d-none");

    // --- Guardar en carrito ---
    const viaje = { nombre: nombreViaje, precio: precio };
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.push(viaje);
    localStorage.setItem("carrito", JSON.stringify(carrito));

    // Ocultar mensaje después de 6,5 segundos
    setTimeout(() => {
      mensaje.classList.add("d-none");
    }, 6500);
  }
function mostrarCarrito() {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const contenedor = document.getElementById("carrito");
  const totalElem = document.getElementById("total");

  contenedor.innerHTML = "";
  let total = 0;

  if (carrito.length === 0) {
    contenedor.innerHTML = "<p class='text-center text-muted'>No hay viajes en tu carrito.</p>";
    totalElem.textContent = "Total: $0";
    return;
  }

  carrito.forEach((viaje, index) => {
    const card = document.createElement("div");
    card.classList.add("card-viaje");

    card.innerHTML = `
      <h5>${viaje.nombre}</h5>
      <p class="mb-2">$${viaje.precio} USD</p>
      <button class="btn btn-sm btn-outline-danger btn-eliminar" onclick="eliminarViaje(${index})">Eliminar</button>
    `;

    contenedor.appendChild(card);
    total += viaje.precio;
  });

  totalElem.textContent = `Total: $${total} USD`;
}

function eliminarViaje(index) {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  carrito.splice(index, 1);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
}

function vaciarCarrito() {
  localStorage.removeItem("carrito");
  mostrarCarrito();
}

mostrarCarrito();