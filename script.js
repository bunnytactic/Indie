// =======================================================
// ARREGLO DE DATOS para Juegos Nuevos
// Cada objeto debe tener al menos 5 propiedades.
// =======================================================
const juegosNuevos = [
    {
        id: 1,
        nombre: "Expedition 33",
        genero: "RPG por Turnos",
        fechaLanzamiento: "2025-03-15",
        desarrollador: "Sandfall Interactive",
        precio: 39.99,
        imagenUrl: "EX.png",
        descripcion: "Una aventura épica con combate estratégico en un mundo post-apocalíptico.",
    },
    {
        id: 2,
        nombre: "Balatro",
        genero: "Roguelite / Poker",
        fechaLanzamiento: "2024-02-20",
        desarrollador: "LocalThunk",
        precio: 14.99,
        imagenUrl: "BL.png",
        descripcion: "El roguelite de construcción de mazos definitivo basado en manos de póker.",
    },
    {
        id: 3,
        nombre: "Hades II",
        genero: "Roguelite / Acción",
        fechaLanzamiento: "2024-05-06", // Acceso Anticipado
        desarrollador: "Supergiant Games",
        precio: 29.99,
        imagenUrl: "HD.png",
        descripcion: "Toma el papel de Melinoë en esta secuela de acción y mitología griega.",
    }
];

// =======================================================
// ARREGLO DE DATOS para Tendencia
// =======================================================
const juegosTendencia = [
    {
        id: 4,
        nombre: "Hollow Knight: Silksong",
        genero: "Metroidvania",
        fechaLanzamiento: "TBA",
        desarrollador: "Team Cherry",
        precio: 24.99,
        imagenUrl: "HS.png",
        descripcion: "La esperada secuela donde juegas como Hornet en un nuevo reino.",
    },
    {
        id: 5,
        nombre: "Wheel World",
        genero: "Plataformas 2D",
        fechaLanzamiento: "2024-07-25",
        desarrollador: "Navegante Entertainment",
        precio: 19.99,
        imagenUrl: "WW.png",
        descripcion: "Un plataformas con estética retro y un protagonista rodante.",
    },
    {
        id: 6,
        nombre: "Blue Prince",
        genero: "Misterio / Aventura",
        fechaLanzamiento: "2025-01-10",
        desarrollador: "Team Nimbus",
        precio: 22.50,
        imagenUrl: "BP.png",
        descripcion: "Resuelve un misterio generacional explorando una mansión surrealista.",
    }
];


// =======================================================
// FUNCIÓN PARA GENERAR TARJETAS DINÁMICAMENTE
// =======================================================
function generarTarjetas(juegos, contenedorId) {
    const contenedor = document.getElementById(contenedorId);
    let htmlContent = '';

    juegos.forEach(juego => {
        // Usamos Template Literals para crear la estructura de la tarjeta con clases de Bootstrap
        // La descripción y la fecha sirven como propiedades adicionales requeridas
        htmlContent += `
            <div class="col">
                <div class="card h-100 border-0 rounded-0 shadow-sm" data-id="${juego.id}">
                    <img src="${juego.imagenUrl}" class="card-img-top rounded-0" alt="${juego.nombre}">
                    <div class="card-body text-center">
                        <h5 class="card-title fw-bold">${juego.nombre}</h5>
                        <p class="card-text mb-1"><small class="text-muted">${juego.genero} - ${juego.desarrollador}</small></p>
                        <p class="card-text">${juego.descripcion.substring(0, 50)}...</p>
                        <p class="card-text"><strong>Precio:</strong> $${juego.precio.toFixed(2)}</p>
                        <p class="card-text"><small class="text-danger">Lanzamiento: ${juego.fechaLanzamiento}</small></p>
                    </div>
                </div>
            </div>
        `;
    });

    // Inyecta todo el HTML generado en el contenedor
    if (contenedor) {
        contenedor.innerHTML = htmlContent;
    } else {
        console.error(`Error: Contenedor con ID '${contenedorId}' no encontrado.`);
    }
}


// =======================================================
// LLAMADAS AL CARGAR LA PÁGINA
// =======================================================
document.addEventListener('DOMContentLoaded', function() {
    // Genera la sección de Juegos Nuevos
    generarTarjetas(juegosNuevos, 'juegos-nuevos-container');

    // Genera la sección de Tendencia
    generarTarjetas(juegosTendencia, 'tendencia-container');
    
    console.log("Tarjetas de juegos generadas dinámicamente.");
});

// =======================================================
// DATOS DE RESEÑAS DE LA COMUNIDAD
// =======================================================
const reseñasComunidad = [
    {
        juego: "Celeste",
        reseñaId: 101,
        autorNombre: "Carol Fraser",
        autorUsuario: "@carol-fraser",
        puntuacion: 5,
        tiempo: "2 weeks ago",
        texto: "Un desafío de plataformas brutalmente justo y profundamente humano. Cada salto fallido refleja la lucha de Madeline contra la ansiedad. Un relato íntimo sobre la autoaceptación, acompañado de una banda sonora maestra.",
        imagenJuegoUrl: "Av/CL.png",
        colorClase: "reseña-celeste", // Clase de estilo de fondo
        redSocial: "Discord"
    },
    {
        juego: "Blasphemous (DLC)",
        reseñaId: 102,
        autorNombre: "Tomas Peña",
        autorUsuario: "@Tom_22",
        puntuacion: 4,
        tiempo: "1 month ago",
        texto: "Más grande, más rápido y con una ambientación visual que sigue siendo visceral y brutal. El Penitente ahora tiene tres armas distintas que cambian el gameplay y ofrecen mayor movilidad y variedad en el combate. Sigue siendo oscuro y desafiante, pero ahora se siente más Metroidvania que su predecesor.",
        imagenJuegoUrl: "Av/BH.png",
        colorClase: "reseña-blasphemous", 
        redSocial: "Instagram"
    },
    {
        juego: "Hollow Knight: Silksong",
        reseñaId: 103,
        autorNombre: "Luis diaz",
        autorUsuario: "@Lui_232",
        puntuacion: 5,
        tiempo: "1 month ago",
        texto: "La secuela del gran Metroidvania cambia al Caballero por Hornet, y esto lo cambia todo. Esperamos un gameplay mucho más rápido y ágil, centrado en el movimiento vertical y la seda. La dificultad será alta, fiel al original, pero con una nueva sensación de fluidez y gracia al explorar Pharloom. El hype es real.",
        imagenJuegoUrl: "Av/HS.png",
        colorClase: "reseña-hollow-knight", 
        redSocial: "Instagram"
    },
    {
        juego: "Expedition 33",
        reseñaId: 104,
        autorNombre: "Leidy Montez",
        autorUsuario: "@LL_1189",
        puntuacion: 4,
        tiempo: "1 month ago",
        texto: "Un RPG por turnos con un apartado visual de nueva generación que ha sido aclamado como 'Juego del Año' en la Gamescom Asia. Su premisa es épica: un equipo debe detener a la mujer que borra a la humanidad de la existencia. Combina el drama narrativo con batallas visualmente impactantes y ha sido comparado con los grandes del género.",
        imagenJuegoUrl: "Av/EX.png",
        colorClase: "reseña-otra", 
        redSocial: "Discord"
    },
    // Añade 4 reseñas más para que el botón "Ver más" sea funcional
    { juego: "The Witness", 
    reseñaId: 105, 
    autorNombre: "Alan Poe", 
    autorUsuario: "@alanp", 
    puntuacion: 5, 
    tiempo: "3 days ago", 
    texto: "El mejor juego de puzles jamás hecho. Exige concentración y un cambio de perspectiva sobre cómo ves el mundo. Es arte puro.", 
    imagenJuegoUrl: "Av/R.jpeg", 
    colorClase: "reseña-otra", 
    redSocial: "Instagram" },
    { juego: "Limbo", 
        reseñaId: 106, 
        autorNombre: "Laura G.", 
        autorUsuario: "@lau_g", 
        puntuacion: 4, 
        tiempo: "1 week ago", 
        texto: "Ambientación inquietante y puzles desafiantes. Una obra maestra del minimalismo que te atrapará.", 
        imagenJuegoUrl: "Av/LM.jpeg", 
        colorClase: "reseña-hollow-knight", 
        redSocial: "Discord" },
    { juego: "Stardew Valley", 
        reseñaId: 107, 
        autorNombre: "Eric B.", 
        autorUsuario: "@concerned_fan", 
        puntuacion: 5, 
        tiempo: "2 months ago", 
        texto: "La vida tranquila de granja combinada con elementos RPG. Es el juego perfecto para relajarse y perderse durante cientos de horas.", 
        imagenJuegoUrl: "Av/SV.png", 
        colorClase: "reseña-celeste", 
        redSocial: "Instagram" },
    { juego: "Dead Cells", 
        reseñaId: 108, 
        autorNombre: "Max R.", 
        autorUsuario: "@MaxRogue", 
        puntuacion: 4, 
        tiempo: "5 days ago", 
        texto: "Combate frenético y una progresión adictiva. Cada carrera es diferente y la curva de aprendizaje te obliga a mejorar constantemente.", 
        imagenJuegoUrl: "Av/DC.jpg", 
        colorClase: "reseña-blasphemous", 
        redSocial: "Discord" }
    // Añadir más reseñas aquí...
];
const RESEÑAS_POR_CARGA = 4; // Cantidad de reseñas a mostrar por defecto y al hacer clic
let reseñasActuales = 0;     // Contador para saber cuántas reseñas se han mostrado

// =======================================================
// FUNCIÓN PARA GENERAR LAS ESTRELLAS DE PUNTUACIÓN
// =======================================================
function generarEstrellas(puntuacion) {
    let estrellas = '';
    // Estrellas llenas (Fa-Star)
    for (let i = 0; i < puntuacion; i++) {
        estrellas += '<i class="fas fa-star"></i>';
    }
    // Estrellas vacías o semivacías para completar hasta 5
    for (let i = puntuacion; i < 5; i++) {
        estrellas += '<i class="far fa-star"></i>';
    }
    return estrellas;
}



// =======================================================
// FUNCIÓN PRINCIPAL PARA CARGAR Y MOSTRAR RESEÑAS
// =======================================================
function cargarReseñas() {
    const contenedor = document.getElementById('reseñas-comunidad-container');
    const btnVerMas = document.getElementById('btn-ver-mas');
    
    if (!contenedor || !btnVerMas) return;

    // Determina el índice de inicio y fin para el nuevo lote de reseñas
    const inicio = reseñasActuales;
    const fin = Math.min(reseñasActuales + RESEÑAS_POR_CARGA, reseñasComunidad.length);

    let htmlContent = '';

    // Itera solo sobre el subconjunto de reseñas que se van a cargar ahora
    for (let i = inicio; i < fin; i++) {
        const reseña = reseñasComunidad[i];
        const estrellasHtml = generarEstrellas(reseña.puntuacion);
        
        // Icono social
        let socialIcon = '';
        if (reseña.redSocial === "Discord") {
            socialIcon = '<i class="fab fa-discord"></i>';
        } else if (reseña.redSocial === "Instagram") {
            socialIcon = '<i class="fab fa-instagram"></i>';
        }
        
        // Estructura de la tarjeta (se añade con += para sumar al contenido existente)
        htmlContent += `
            <div class="col">
                <div class="reseña-card shadow-sm">
                    <img src="${reseña.imagenJuegoUrl}" class="reseña-card-img" alt="Reseña de ${reseña.juego}">
                    
                    <div class="reseña-card-body ${reseña.colorClase}">
                        <div class="reseña-meta">
                            <div class="reseña-meta-usuario">
                                <img src="Av/${reseña.autorNombre}.png" alt="${reseña.autorNombre}">
                                <div>
                                    <span class="d-block">${reseña.autorNombre}</span>
                                    <small class="text-muted">${reseña.autorUsuario} • ${reseña.tiempo}</small>
                                </div>
                            </div>
                            <div class="reseña-social">
                                <a href="#">${socialIcon}</a>
                            </div>
                        </div>
                        
                        <div class="reseña-estrellas mb-2">
                            ${estrellasHtml}
                        </div>
                        <p class="reseña-texto">${reseña.texto}</p>
                    </div>
                </div>
            </div>
        `;
    }

    // Añade el nuevo HTML al contenido existente
    contenedor.innerHTML += htmlContent;

    // Actualiza el contador de reseñas mostradas
    reseñasActuales = fin;

    // Oculta o muestra el botón "Ver más"
    if (reseñasActuales >= reseñasComunidad.length) {
        btnVerMas.style.display = 'none'; // Oculta si ya se mostraron todas
    } else {
        btnVerMas.style.display = 'block'; // Muestra si aún hay más por cargar
    }
}

//===========//


// =======================================================
// ARREGLO DE DATOS para Creadores
// =======================================================
const creadores = [
    {
        nombre: "Concerned Ape (Eric Barone)",
        juego: "Stardew Valley",
        descripcion: "Eric Barone, también conocido por su alias ConcernedApe, es un desarrollador y diseñador de videojuegos, artista, compositor y músico estadounidense. Es conocido por crear el videojuego de simulación Stardew Valley, publicado en 2016.",
        imagenUrl: "Concerned Ape.png",
    },
    {
        nombre: "Team Cherry",
        juego: "Hollow Knight / Silksong",
        descripcion: "Un pequeño estudio australiano de desarrollo de videojuegos indie, famoso por crear el aclamado Metroidvania, Hollow Knight. El equipo está formado por Ari Gibson y William Pellen.",
        imagenUrl: "TC.png",
    },
    {
        nombre: "The Game Kitchen",
        juego: "Blasphemous",
        descripcion: "Estudio español con sede en Sevilla, conocido por el desarrollo de Blasphemous, un juego de acción y plataformas 2D con una marcada estética gótica y religiosa inspirada en el folclore andaluz.",
        imagenUrl: "TGK.jpg",
    }
];

// --- Variables de Control del Slider de Creadores ---
let creadorIndexActual = 0; // Índice del creador visible


// =======================================================
// FUNCIÓN PARA GENERAR EL CONTENIDO DE CREADORES
// =======================================================
function generarCreadoresCarrusel() {
    const carruselInner = document.getElementById('creadores-carrusel-inner');
    if (!carruselInner) return;

    let htmlContent = '';
    creadores.forEach((creador, index) => {
        htmlContent += `
            <div class="creador-slide flex-shrink-0" style="width: 100%;">
                <div class="row align-items-center">
                    <div class="col-md-5 mb-4 mb-md-0">
                        <img src="${creador.imagenUrl}" class="img-fluid rounded-0 shadow-sm" alt="${creador.nombre}">
                    </div>
                    <div class="col-md-7">
                        <h3 class="h2 fw-bold mb-3">${creador.nombre}</h3>
                        <p>Juego principal: <strong>${creador.juego}</strong></p>
                        <p>${creador.descripcion}</p>
                    </div>
                </div>
            </div>
        `;
    });
    carruselInner.innerHTML = htmlContent;
}


// =======================================================
// FUNCIÓN PARA MOVER EL SLIDER DE CREADORES
// =======================================================
function moverCreadorCarrusel(direccion) {
    const carruselInner = document.getElementById('creadores-carrusel-inner');
    if (!carruselInner) return;

    if (direccion === 'next') {
        creadorIndexActual = (creadorIndexActual + 1) % creadores.length;
    } else if (direccion === 'prev') {
        creadorIndexActual = (creadorIndexActual - 1 + creadores.length) % creadores.length;
    }
    
    // Calcula el desplazamiento en porcentaje
    const desplazamiento = -creadorIndexActual * 100; // Cada slide ocupa el 100% del ancho del contenedor visible
    carruselInner.style.transform = `translateX(${desplazamiento}%)`;
}


// =======================================================
// INICIALIZACIÓN GENERAL (MODIFICADA)
// =======================================================
document.addEventListener('DOMContentLoaded', function() {
    // --- Lógica para la página Home (index.html) ---
    if (document.getElementById('juegos-nuevos-container')) {
        // Asumiendo que aún tienes estas funciones definidas o las redefinirás
        // generarTarjetas(juegosNuevos, 'juegos-nuevos-container');
        // generarTarjetas(juegosTendencia, 'tendencia-container');
        
        // --- Lógica Específica para el Carrusel de Creadores en Home ---
        generarCreadoresCarrusel(); // Genera el contenido inicial

        const btnPrevCreador = document.getElementById('btn-creador-prev');
        const btnNextCreador = document.getElementById('btn-creador-next');

        if (btnPrevCreador && btnNextCreador) {
            btnPrevCreador.addEventListener('click', () => moverCreadorCarrusel('prev'));
            btnNextCreador.addEventListener('click', () => moverCreadorCarrusel('next'));
        }
    }

    // --- Lógica para la página de Reseñas de la Comunidad (comunidad.html) ---
    if (document.getElementById('reseñas-comunidad-container')) {
        // Asegúrate de que cargarReseñas() esté definida en script.js
        cargarReseñas(); 
        
        const btnVerMas = document.getElementById('btn-ver-mas');
        if (btnVerMas) {
            btnVerMas.addEventListener('click', cargarReseñas);
        }
    }
    
    console.log("Página cargada. Contenido dinámico renderizado.");
});
