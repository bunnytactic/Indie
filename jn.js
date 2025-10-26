// juegosnuevos.js

// =======================================================
// DATOS para la Sección de Juegos Nuevos (Listado Completo)
// =======================================================
const juegosDestacados = [
    {
        id: 101, // ID ÚNICO AGREGADO
        titulo: "Constance",
        descripcion: "Un metroidvania dibujado a mano con una estética única que explora la salud mental.",
        imagenUrl: "https://via.placeholder.com/600x400?text=Constance",
        ordenInvertido: false, // Texto izquierda, Imagen derecha
        precio: "19.99 USD",
        fecha: "20 Diciembre 2024"
    },
    {
        id: 102, // ID ÚNICO AGREGADO
        titulo: "Indika",
        descripcion: "Un juego sobre una monja que viaja con el mismísimo diablo. Único en su premisa y ambientación. Su trama filosófica y visualmente impactante lo convierten en una experiencia narrativa imperdible.",
        imagenUrl: "https://via.placeholder.com/600x400?text=Indika",
        ordenInvertido: true, // Imagen izquierda, Texto derecha
        precio: "24.99 USD",
        fecha: "02 Mayo 2024"
    },
    {
        id: 103, // ID ÚNICO AGREGADO
        titulo: "Absolum",
        descripcion: "Combate rápido, estética de cómic vibrante y acción frenética. Una sorpresa de las últimas demos con un sistema de combos altamente adictivo.",
        imagenUrl: "https://via.placeholder.com/600x400?text=Absolum",
        ordenInvertido: false, // Texto izquierda, Imagen derecha
        precio: "14.99 USD",
        fecha: "15 Marzo 2025"
    },
    {
        id: 104, // ID ÚNICO AGREGADO
        titulo: "Ratatan",
        descripcion: "El sucesor espiritual del clásico Patapon. Una aventura rítmica con arte adorable y una jugabilidad de estrategia musical.",
        imagenUrl: "https://via.placeholder.com/600x400?text=Ratatan+Image", // URL de imagen de placeholder agregada
        ordenInvertido: true, // Imagen izquierda, Texto derecha
        precio: "29.99 USD",
        fecha: "Pendiente"
    }
];


// =======================================================
// FUNCIONES GLOBALES DE CARRITO (Simulación)
// Nota: Estas deberían estar en un archivo separado para ser verdaderamente globales.
// =======================================================

const CART_KEY = 'indielab_cart';

/**
 * Carga el contenido del carrito desde localStorage.
 * @returns {Array} Un array de objetos {id, nombre, precio, cantidad}.
 */
function getCart() {
    const cartJson = localStorage.getItem(CART_KEY);
    return cartJson ? JSON.parse(cartJson) : [];
}

/**
 * Guarda el contenido del carrito en localStorage.
 * @param {Array} cartArray El array de objetos del carrito.
 */
function saveCart(cartArray) {
    localStorage.setItem(CART_KEY, JSON.stringify(cartArray));
    updateCartIconCount(); // Llama a la función global para actualizar la Navbar
}

/**
 * Actualiza el contador en el ícono del carrito en la Navbar.
 */
function updateCartIconCount() {
    const cart = getCart();
    const totalItems = cart.reduce((sum, item) => sum + item.cantidad, 0);
    const cartCountElement = document.getElementById('cart-count');

    if (cartCountElement) {
        cartCountElement.textContent = totalItems;
        // Solo muestra el contador si hay más de 0 ítems
        cartCountElement.style.display = totalItems > 0 ? 'inline-block' : 'none'; 
    }
}

/**
 * Añade un producto al carrito (usado por el botón "Agregar al Carrito").
 * @param {object} product Datos del juego (id, titulo, precio, etc.).
 */
function addToCart(product) {
    let cart = getCart();
    // Aseguramos que el ID sea numérico si es necesario, aunque aquí lo tratamos como string si viene del JSON
    const existingItem = cart.find(item => item.id == product.id); 

    if (existingItem) {
        existingItem.cantidad += 1;
    } else {
        // Obtenemos el precio como número limpiándolo del sufijo ' USD'
        const cleanPrice = parseFloat(product.precio.replace(' USD', ''));
        cart.push({
            id: product.id,
            nombre: product.titulo,
            precio: cleanPrice, // Guardamos el precio como float
            imagenUrl: product.imagenUrl,
            cantidad: 1
        });
    }

    saveCart(cart);
    console.log(`Juego añadido: ${product.titulo}. Carrito actual:`, cart);
}


// =======================================================
// FUNCIÓN PRINCIPAL PARA GENERAR EL LISTADO ESTÁTICO
// =======================================================
function generarListadoJuegosNuevos() {
    const contenedor = document.getElementById('juego-listado-container');
    if (!contenedor) return;

    let htmlContent = '';

    juegosDestacados.forEach(juego => {
        // Determina el orden de las columnas para alternar (similar a las imágenes)
        const orderText = juego.ordenInvertido ? 'order-md-1' : 'order-md-0';
        const orderImage = juego.ordenInvertido ? 'order-md-0' : 'order-md-1';

        // Creamos un objeto JSON de datos para pasarlo al evento click
        // Incluimos ID y el precio en formato string (como lo recibimos)
        const gameData = JSON.stringify({
            id: juego.id,
            titulo: juego.titulo,
            precio: juego.precio, 
            imagenUrl: juego.imagenUrl
        }).replace(/"/g, "'"); // Reemplazamos comillas dobles por simples para el HTML onclick
        
        htmlContent += `
            <div class="juego-list-item row align-items-center mb-5 pb-5 border-bottom border-light-subtle">
                <div class="col-md-6 ${orderImage}">
                    <img src="jn/${juego.titulo}.png" class="img-fluid rounded-0 juego-imagen-destacada" alt="${juego.titulo}">
                </div>
                <div class="col-md-6 ${orderText}">
                    <h2 class="display-6 fw-bold mb-3">${juego.titulo}</h2>
                    <p class="lead mb-4">${juego.descripcion}</p>
                    
                    <div class="d-flex justify-content-between align-items-center mb-4">
                        <div class="juego-meta">
                            <p class="mb-1 text-muted">Precio: <strong class="text-dark">${juego.precio}</strong></p>
                            <p class="mb-0 text-muted">Lanzamiento: ${juego.fecha}</p>
                        </div>
                        
                        <button class="btn btn-danger rounded-0 px-4 py-2" onclick="addToCart(${gameData})">
                            <i class="fas fa-shopping-cart me-2"></i> Agregar al Carrito
                        </button>
                    </div>
                    
                    <button class="btn btn-outline-dark rounded-0 px-4 py-2 mt-3">Saber más..</button>
                </div>
            </div>
        `;
    });

    contenedor.innerHTML = htmlContent;
}


// =======================================================
// INICIALIZACIÓN
// =======================================================
document.addEventListener('DOMContentLoaded', function() {
    // Asegura que el contador del carrito se actualice cuando la página carga
    updateCartIconCount(); 

    // Si el contenedor de listado existe, generamos el contenido estático
    if (document.getElementById('juego-listado-container')) {
        generarListadoJuegosNuevos(); 
    }
});