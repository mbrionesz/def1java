let precio = 400000 // Precio Inicial
let cantidad = 0 // Cantidad Inicial

const precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

function actualizarCantidadYTotal() {
  const cantidadSpan = document.querySelector(".cantidad");
  const valorTotalSpan = document.querySelector(".valor-total");

  cantidadSpan.textContent = cantidad;
  valorTotalSpan.textContent = precio * cantidad;
}

function incrementar() {
  cantidad++;
  actualizarCantidadYTotal();
}

function decrementar() {
  if (cantidad > 0) {
    cantidad--;
    actualizarCantidadYTotal();
  }
}
