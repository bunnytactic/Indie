// desarrolladores-assets/desarrolladores.js

// =======================================================
// DATOS DE DESARROLLADORES FAMOSOS
// =======================================================
const desarrolladores = [
    {
        nombre: "Concerned Ape (Eric Barone)",
        juego: "Stardew Valley",
        imagenUrl: "ConcernedApe",
        biografia: "Eric Barone, conocido profesionalmente como ConcernedApe, es un diseñador de videojuegos estadounidense, artista, compositor y músico. Es famoso por ser el creador solitario del exitoso videojuego de simulación de granjas 'Stardew Valley', un proyecto en el que dedicó cerca de cinco años de su vida, realizando todo el arte, diseño, música y código él mismo. Su enfoque en el desarrollo independiente y el trato cercano con la comunidad lo han convertido en una figura icónica."
    },
    {
        nombre: "Team Cherry",
        juego: "Hollow Knight / Silksong",
        imagenUrl: "TeamCherry",
        biografia: "Team Cherry es un pequeño estudio de desarrollo de videojuegos independiente con sede en Adelaida, Australia. Fundado por Ari Gibson, William Pellen y Jack Vine (quien se unió en el desarrollo de Silksong). Son mundialmente conocidos por crear 'Hollow Knight', un aclamado juego de acción y aventura estilo Metroidvania, reconocido por su arte dibujado a mano, jugabilidad precisa y una profunda narrativa ambiental."
    },
    {
        nombre: "Edmund McMillen",
        juego: "The Binding of Isaac / Super Meat Boy",
        imagenUrl: "McMillen",
        biografia: "Edmund McMillen es un diseñador de videojuegos estadounidense famoso por sus títulos con temáticas oscuras, humor ácido y estéticas grotescas. Es el creador de 'The Binding of Isaac', un roguelike aclamado por su rejugabilidad infinita, y co-creador de 'Super Meat Boy', un desafiante juego de plataformas. Su trabajo a menudo explora temas personales de su infancia, religión y ansiedad."
    },
    {
        nombre: "Lucas Pope",
        juego: "Papers, Please / Return of the Obra Dinn",
        imagenUrl: "LucasPope",
        biografia: "Lucas Pope es un desarrollador de videojuegos estadounidense conocido por crear juegos que exploran narrativas complejas a través de mecánicas inusuales y restrictivas. Es el creador de 'Papers, Please', un simulador de inspector de aduanas con dilemas morales, y 'Return of the Obra Dinn', un juego de misterio a bordo de un barco con un estilo visual único. Su trabajo ha ganado múltiples premios por su innovación y diseño narrativo."
    },
    // Añadir más desarrolladores para hacer funcionar el botón "Ver más"
    {
        nombre: "Jenova Chen",
        juego: "Journey / Flower / Sky",
        imagenUrl: "JenovaChen",
        biografia: "Jenova Chen es un diseñador de juegos chino, co-fundador y director creativo de Thatgamecompany. Sus juegos son conocidos por enfocarse en generar emociones y experiencias poéticas, más allá del desafío o el combate. Títulos como 'Flower' y 'Journey' son considerados hitos en el arte interactivo, promoviendo la conexión y la exploración emocional."
    },
    {
        nombre: "Markus 'Notch' Persson",
        juego: "Minecraft",
        imagenUrl: "Notch",
        biografia: "Markus Persson, más conocido como 'Notch', es un desarrollador de juegos sueco y el creador original de Minecraft, uno de los videojuegos más vendidos de todos los tiempos. Fundó la compañía Mojang para desarrollar el juego, que fue un fenómeno que popularizó enormemente el género sandbox y la estética voxel en el desarrollo indie."
    }
    // Puedes añadir más si quieres una lista más larga
];

// --- Variables de Control de Paginación ---
const DEVS_POR_CARGA = 4; // Cantidad de desarrolladores a mostrar por defecto y al hacer clic
let devsActuales = 0;     // Contador para saber cuántos desarrolladores se han mostrado


// =======================================================
// FUNCIÓN PRINCIPAL PARA CARGAR Y MOSTRAR DESARROLLADORES
// =======================================================
function cargarDesarrolladores() {
    const contenedor = document.getElementById('desarrolladores-container');
    const btnVerMas = document.getElementById('btn-ver-mas-devs');
    
    if (!contenedor || !btnVerMas) return;

    // Determina el índice de inicio y fin para el nuevo lote
    const inicio = devsActuales;
    const fin = Math.min(devsActuales + DEVS_POR_CARGA, desarrolladores.length);

    let htmlContent = '';

    // Itera solo sobre el subconjunto que se va a cargar ahora
    for (let i = inicio; i < fin; i++) {
        const dev = desarrolladores[i];
        
        // Estructura de la tarjeta del desarrollador
        htmlContent += `
            <div class="col">
                <div class="dev-card shadow-sm">
                    <img src="imagenes/${dev.imagenUrl}.png" class="dev-image card-img-top rounded-0" alt="Imagen de ${dev.nombre}">
                    
                    <div class="dev-card-body">
                        <h3 class="dev-name">${dev.nombre}</h3>
                        <p class="dev-game text-muted">Creador de: ${dev.juego}</p>
                        <p class="dev-bio">${dev.biografia}</p>
                        <a href="#" class="btn btn-dark rounded-0 mt-3">Ver Biografía Completa</a>
                    </div>
                </div>
            </div>
        `;
    }

    // Añade el nuevo HTML al contenido existente
    contenedor.innerHTML += htmlContent;

    // Actualiza el contador de desarrolladores mostrados
    devsActuales = fin;

    // Oculta o muestra el botón "Ver más"
    if (devsActuales >= desarrolladores.length) {
        btnVerMas.style.display = 'none'; // Oculta si ya se mostraron todos
    } else {
        btnVerMas.style.display = 'block'; // Muestra si aún hay más por cargar
    }
}


// =======================================================
// INICIALIZACIÓN
// =======================================================
document.addEventListener('DOMContentLoaded', function() {
    const btnVerMas = document.getElementById('btn-ver-mas-devs');
    
    // 1. Carga el primer lote de desarrolladores al inicio
    if (document.getElementById('desarrolladores-container')) {
        cargarDesarrolladores();

        // 2. Asigna la función de carga al evento click del botón
        if (btnVerMas) {
            btnVerMas.addEventListener('click', cargarDesarrolladores);
        }
    }
});