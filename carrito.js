// carrito.js

// =======================================================
// FUNCIONES GLOBALES (Deben ser las mismas que en juegosnuevos.js)
// =======================================================

const CART_KEY = 'indielab_cart'; // Clave debe coincidir con juegosnuevos.js

function getCart() {
    const cartJson = localStorage.getItem(CART_KEY);
    return cartJson ? JSON.parse(cartJson) : [];
}

function saveCart(cartArray) {
    localStorage.setItem(CART_KEY, JSON.stringify(cartArray));
    renderCart(); // Al guardar, volvemos a renderizar
    updateCartIconCount(); // Actualiza el icono en la navbar
}

function updateCartIconCount() {
    const cart = getCart();
    const totalItems = cart.reduce((sum, item) => sum + item.cantidad, 0);
    const cartCountElement = document.getElementById('cart-count');

    if (cartCountElement) {
        cartCountElement.textContent = totalItems;
        cartCountElement.style.display = totalItems > 0 ? 'block' : 'none';
    }
}


// =======================================================
// FUNCIONES DE MANEJO DEL CARRITO (Exclusivas de carrito.html)
// =======================================================

/**
 * Recalcula y muestra el subtotal, impuestos y total.
 */
function updateTotals(cart) {
    const subtotal = cart.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
    const taxRate = 0; // Asumimos 0% de impuesto por simplicidad
    const tax = subtotal * taxRate;
    const total = subtotal + tax;

    document.getElementById('cart-subtotal').textContent = `${subtotal.toFixed(2)} USD`;
    document.getElementById('cart-tax').textContent = `${tax.toFixed(2)} USD`;
    document.getElementById('cart-total').textContent = `${total.toFixed(2)} USD`;
}

/**
 * Cambia la cantidad de un producto en el carrito.
 * @param {number} id ID del producto.
 * @param {number} change Cantidad a sumar (ej: 1 para aumentar, -1 para disminuir).
 */
function changeQuantity(id, change) {
    let cart = getCart();
    const item = cart.find(i => i.id === id);

    if (item) {
        item.cantidad += change;
        if (item.cantidad <= 0) {
            // Si la cantidad es 0 o menos, lo eliminamos
            removeItem(id);
            return; // Salir de la función para evitar doble renderizado
        }
        saveCart(cart);
    }
}

/**
 * Elimina un producto del carrito.
 * @param {number} id ID del producto a eliminar.
 */
function removeItem(id) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== id);
    saveCart(cart);
}


/**
 * Renderiza todos los elementos del carrito en la página.
 */
function renderCart() {
    const contenedor = document.getElementById('cart-items-container');
    const cart = getCart();
    
    if (!contenedor) return;

    if (cart.length === 0) {
        contenedor.innerHTML = '<div class="alert alert-info mt-3" role="alert">Tu carrito está vacío. ¡Añade algunos juegos!</div>';
        updateTotals([]);
        document.getElementById('btn-confirmar').disabled = true;
        return;
    }

    document.getElementById('btn-confirmar').disabled = false;
    let htmlContent = '';

    cart.forEach(item => {
        const itemTotal = item.precio * item.cantidad;
        
        htmlContent += `
            <div class="list-group-item py-3">
                <div class="row align-items-center">
                    <div class="col-md-6 d-flex align-items-center">
                        <img src="${item.imagenUrl}" alt="${item.nombre}" style="width: 80px; height: 50px; object-fit: cover;" class="me-3 rounded">
                        <span class="fw-bold">${item.nombre}</span>
                    </div>

                    <div class="col-md-2 text-center text-muted">$${item.precio.toFixed(2)}</div>
                    <div class="col-md-2 d-flex justify-content-center">
                        <button class="btn btn-sm btn-outline-secondary rounded-0" onclick="changeQuantity(${item.id}, -1)">-</button>
                        <input type="text" value="${item.cantidad}" class="form-control form-control-sm text-center mx-1" readonly style="width: 50px;">
                        <button class="btn btn-sm btn-outline-secondary rounded-0" onclick="changeQuantity(${item.id}, 1)">+</button>
                    </div>

                    <div class="col-md-2 text-end">
                        <span class="fw-bold">$${itemTotal.toFixed(2)}</span>
                        <button class="btn btn-sm btn-link text-danger ms-2" onclick="removeItem(${item.id})">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    });

    contenedor.innerHTML = htmlContent;
    updateTotals(cart);
}


/**
 * Limpia el carrito al confirmar o cancelar la compra.
 */
function handleCheckoutAction(action) {
    if (getCart().length === 0) {
        alert("El carrito ya está vacío.");
        return;
    }
    
    if (action === 'confirmar') {
        alert("¡Compra confirmada! Total a pagar: " + document.getElementById('cart-total').textContent);
    } else if (action === 'cancelar') {
        alert("Compra cancelada. Tu carrito ha sido vaciado.");
    }
    
    // Vaciar el carrito y actualizar la vista
    localStorage.removeItem(CART_KEY);
    renderCart();
}


// =======================================================
// INICIALIZACIÓN
// =======================================================
document.addEventListener('DOMContentLoaded', function() {
    updateCartIconCount(); // Carga el contador en la Navbar al inicio
    
    if (document.getElementById('cart-items-container')) {
        renderCart();

        // Asignar eventos a los botones de acción
        document.getElementById('btn-confirmar').addEventListener('click', () => {
            handleCheckoutAction('confirmar');
        });
        document.getElementById('btn-cancelar').addEventListener('click', () => {
            handleCheckoutAction('cancelar');
        });
    }
});