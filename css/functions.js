//Menu
const i = document.querySelector("i");
const menuIcon = i.firstElementChild;
const menu = document.querySelector(".menu");

menuIcon.addEventListener("click", () => {
    menu.classList.toggle("show_menu");
});

//Products
// Selecciona todos los botones de agregar al carrito
const addToCartButtons = document.querySelectorAll('.btn.btn-primary.add');
const cartSection = document.querySelector('.cart');
const badge = document.querySelector('.badge');
const buyButton = document.querySelector('.buy-btn');

function updateCartBadge() {
    const cartItems = cartSection.querySelectorAll('.cart-item');
    badge.textContent = cartItems.length;
}

// Crea el evento al hacer clic en cada botón
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Obteniendo la información del producto
        const productArticle = button.closest('article');
        const productName = productArticle.querySelector('h5').textContent;
        const productPrice = productArticle.querySelector('p').textContent;
        const productImageSrc = productArticle.querySelector('img').src;

        // Crear un nuevo elemento HTML para el producto en el carrito
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        cartItem.innerHTML = `
            <img src="${productImageSrc}" alt="${productName}">
            <p>${productName}</p>
            <p>${productPrice}</p>
            <i class="remove"><img src="img/quitar.jpg" alt="Icono Quitar" class="delete-icon"></i>
        `;

        // Agregar el nuevo elemento a la sección del carrito
        cartSection.appendChild(cartItem);

        // Agregar el evento para eliminar el producto del carrito
        const removeButton = cartItem.querySelector('.remove');
        removeButton.addEventListener('click', () => {
            cartItem.remove();
            updateCartBadge();
        });

        // Actualizar el badge del carrito
        updateCartBadge();

        // Mostrar un mensaje de confirmación (opcional)
        alert(`${productName} ha sido agregado al carrito.`);
    });
});

// Evento para el botón de comprar
buyButton.addEventListener('click', () => {
    // Eliminar todos los elementos del carrito
    cartSection.innerHTML = '<h2>CARRITO</h2>';
    updateCartBadge();

    // Mostrar el mensaje de agradecimiento
    alert('Gracias por su compra.');
});


//Cart
const header = document.querySelector("header");
const cartIcon = header.lastElementChild;
const cart = document.querySelector(".cart")

cartIcon.addEventListener("click", () => {
    cart.classList.toggle("show");
});