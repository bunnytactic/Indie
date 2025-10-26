// proximamente.js

// =======================================================
// DATOS DE JUEGOS PRÓXIMAMENTE
// =======================================================
const juegosProximos = [
    {
        id: 201,
        nombre: "Desktop Defender",
        desarrollador: "Conradical Games",
        fechaLanzamiento: "4 Nov, 2025",
        descripcionCorta: "Defiéndete de interminables oleadas de enemigos, mejora tu torre solitaria y hazte más fuerte a través de las ascensiones mientras realizas tu día."
    },
    {
        id: 202,
        nombre: "The Midnight Walkers",
        desarrollador: "Oneway Ticket Studio",
        fechaLanzamiento: "20 Nov, 2025",
        descripcionCorta: "Lucha, busca y extrae en The Midnight Walkers, un juego FPS hardcore con zombis mortales, jugadores peligrosos y un valioso botín."
    },
    {
        id: 203,
        nombre: "Of Ash and Steel",
        desarrollador: "Fire & Frost",
        fechaLanzamiento: "24 Nov, 2025",
        descripcionCorta: "es un juego de rol inmersivo en tercera persona de mundo abierto creado por un equipo apasionado que valora la esencia de los juegos de rol clásicos de la vieja escuela y los diseños modernos."
    },
    {
        id: 204,
        nombre: "Constance",
        desarrollador: "btf",
        fechaLanzamiento: "24 Nov, 2025",
        descripcionCorta: "es una aventura de acción dibujada a mano en 2D con una artista que empuña un pincel, que se esfuerza por escapar de un mundo interior colorido pero en decadencia, creado por su salud mental en declive."
    },
    {
        id: 205,
        nombre: "MotionRec",
        desarrollador: "HANDSUM",
        fechaLanzamiento: "27 Oct, 2025",
        descripcionCorta: "es un juego de acción de rompecabezas de grabación en el que avanzas a través de las etapas grabando y reproduciendo tus propios movimientos."
    }
];

// Clave para localStorage
const WISHLIST_KEY = 'indielab_wishlist';


// =======================================================
// FUNCIONES DE UTILIDAD
// =======================================================

/**
 * Obtiene la lista de deseos del localStorage.
 * @returns {Array<number>} IDs de los juegos en la lista de deseos.
 */
function getWishlist() {
    const wishlistJson = localStorage.getItem(WISHLIST_KEY);
    return wishlistJson ? JSON.parse(wishlistJson) : [];
}

/**
 * Guarda la lista de deseos en el localStorage.
 * @param {Array<number>} wishlist Lista de IDs.
 */
function saveWishlist(wishlist) {
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
}

/**
 * Maneja el evento de clic en el botón "Añadir a Lista de Deseos".
 * @param {number} juegoId El ID del juego a añadir/eliminar.
 * @param {HTMLElement} buttonElement El botón que fue presionado.
 */
function toggleWishlist(juegoId, buttonElement) {
    let wishlist = getWishlist();
    const index = wishlist.indexOf(juegoId);

    if (index === -1) {
        // Añadir a la lista
        wishlist.push(juegoId);
        buttonElement.classList.remove('btn-outline-dark');
        buttonElement.classList.add('btn-success');
        buttonElement.innerHTML = '<i class="fas fa-check me-2"></i> Añadido!';
        console.log(`Juego ${juegoId} añadido a la lista de deseos.`);
    } else {
        // Eliminar de la lista
        wishlist.splice(index, 1);
        buttonElement.classList.remove('btn-success');
        buttonElement.classList.add('btn-outline-dark');
        buttonElement.innerHTML = '<i class="fas fa-heart me-2"></i> Añadir a Deseos';
        console.log(`Juego ${juegoId} eliminado de la lista de deseos.`);
    }

    saveWishlist(wishlist);
}


// =======================================================
// FUNCIÓN PRINCIPAL DE RENDERIZADO
// =======================================================
function generarListadoProximamente() {
    const contenedor = document.getElementById('proximamente-list-container');
    if (!contenedor) return;

    const wishlist = getWishlist(); // Carga el estado actual de la lista de deseos
    let htmlContent = '';

    juegosProximos.forEach(juego => {
        const isInWishlist = wishlist.includes(juego.id);
        
        // Determina el estado del botón
        const buttonClass = isInWishlist ? 'btn-success' : 'btn-outline-dark';
        const buttonText = isInWishlist ? '<i class="fas fa-check me-2"></i> Añadido!' : '<i class="fas fa-heart me-2"></i> Añadir a Deseos';

        // Estructura de cada elemento de la lista (usando list-group-item de Bootstrap)
        htmlContent += `
            <div class="list-group-item list-group-item-action py-4">
                <div class="d-flex w-100 justify-content-between align-items-center">
                    <div>
                        <h5 class="mb-1 fw-bold">${juego.nombre}</h5>
                        <p class="mb-1 text-muted">Desarrollador: ${juego.desarrollador}</p>
                        <small>${juego.descripcionCorta}</small>
                    </div>
                    <div class="text-end d-flex align-items-center">
                        <div class="me-4">
                            <h6 class="mb-0 fw-bold">Fecha Estimada</h6>
                            <span class="text-primary">${juego.fechaLanzamiento}</span>
                        </div>
                        <button 
                            id="wishlist-btn-${juego.id}"
                            class="btn ${buttonClass} rounded-0 px-4 py-2 btn-sm"
                            data-game-id="${juego.id}"
                        >
                            ${buttonText}
                        </button>
                    </div>
                </div>
            </div>
        `;
    });

    contenedor.innerHTML = htmlContent;

    // Asignar eventos de clic después de que se ha renderizado el HTML
    juegosProximos.forEach(juego => {
        const button = document.getElementById(`wishlist-btn-${juego.id}`);
        if (button) {
            // Usamos un closure para pasar el ID correctamente al manejador
            button.addEventListener('click', () => {
                toggleWishlist(juego.id, button);
            });
        }
    });
}


// =======================================================
// INICIALIZACIÓN
// =======================================================
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('proximamente-list-container')) {
        generarListadoProximamente();
    }
});