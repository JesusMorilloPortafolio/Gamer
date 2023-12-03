// Espera a que el DOM esté completamente cargado antes de ejecutar el código JavaScript
document.addEventListener('DOMContentLoaded', () => {
    // Busca el elemento con ID 'menu-icon'
    const menu = document.querySelector('#menu-icon');
    // Busca el elemento con la clase 'navlist'
    const navlist = document.querySelector('.navlist');

    // Verifica si ambos elementos existen en la página antes de continuar
    if (menu && navlist) {
        // Agrega un evento 'click' al elemento 'menu'
        menu.addEventListener('click', () => {
            // Alterna las clases 'bx-x' y 'open' en el elemento 'menu'
            menu.classList.toggle('bx-x');
            menu.classList.toggle('open');

            // Aquí puedes agregar lógica adicional, como mostrar/ocultar el menú desplegable (usando 'navlist')
            // Por ejemplo, si deseas mostrar/ocultar el menú al hacer clic en '#menu-icon':
            navlist.classList.toggle('show'); // Reemplaza 'show' por la clase que controla la visibilidad del menú
        });
    } else {
        console.error('No se encontraron elementos con los selectores especificados.');
    }
});
