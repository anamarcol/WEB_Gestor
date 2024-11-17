const toggleButton = document.querySelector('.form-button');
const menu = document.querySelector('.menuTipoUsuario');

// Agrega el evento de clic
toggleButton.addEventListener('click', () => {
menu.classList.toggle('active'); // Alterna la clase 'active' en el menú
});