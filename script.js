// Obtener elementos del DOM
const abrirCartaButton = document.getElementById('abrirCarta');
const reproducirMusicaButton = document.getElementById('reproducirMusica');
const reproducirMusicaCartaButton = document.getElementById('reproducirMusicaCarta');
const inicioDiv = document.getElementById('inicio');
const cartaDiv = document.getElementById('carta');
const musica = document.getElementById('musica');

// Función para mostrar la carta y reproducir música
abrirCartaButton.addEventListener('click', () => {
    inicioDiv.classList.add('hidden'); // Oculta la pantalla inicial
    cartaDiv.classList.remove('hidden'); // Muestra la carta
    musica.play(); // Reproduce la música automáticamente
    reproducirMusicaButton.textContent = '🎵 Pausar Música';
});

// Función para reproducir/pausar música en la pantalla inicial
reproducirMusicaButton.addEventListener('click', () => {
    if (musica.paused) {
        musica.play();
        reproducirMusicaButton.textContent = '🎵 Pausar Música';
    } else {
        musica.pause();
        reproducirMusicaButton.textContent = '🎵 Reproducir Música';
    }
});

// Función para reproducir/pausar música en la carta
reproducirMusicaCartaButton.addEventListener('click', () => {
    if (musica.paused) {
        musica.play();
        reproducirMusicaCartaButton.textContent = '🎵 Pausar Música';
    } else {
        musica.pause();
        reproducirMusicaCartaButton.textContent = '🎵 Reproducir Música';
    }
});