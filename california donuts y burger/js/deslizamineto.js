const slider = document.querySelector('.slider');
const columns = document.querySelector('.columns');
const cards = document.querySelectorAll('.tarjeta-rest');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

let index = 0;
let totalCards = cards.length;

// Función para mover hacia la siguiente tarjeta
function moveToNextCard() {
    if (index >= totalCards - 4) return; // Cambia el "4" dependiendo de cuántas tarjetas quieres mostrar a la vez.
    index++;
    columns.style.transition = "transform 0.3s ease";
    columns.style.transform = `translateX(${-index * 25}%)`; // Asegúrate de que el 25% coincida con el ancho de la tarjeta + el margen.
}

// Función para mover hacia la tarjeta anterior
function moveToPrevCard() {
    if (index <= 0) return;
    index--;
    columns.style.transition = "transform 0.3s ease";
    columns.style.transform = `translateX(${-index * 25}%)`;
}

nextBtn.addEventListener('click', moveToNextCard);
prevBtn.addEventListener('click', moveToPrevCard);
