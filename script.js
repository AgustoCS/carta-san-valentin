// Obtener elementos del DOM
const abrirCartaButton = document.getElementById('abrirCarta');
const inicioDiv = document.getElementById('inicio');
const cartaDiv = document.getElementById('carta');

// Función para mostrar la carta
abrirCartaButton.addEventListener('click', () => {
    inicioDiv.classList.add('hidden'); // Oculta la pantalla inicial
    cartaDiv.classList.remove('hidden'); // Muestra la carta
});