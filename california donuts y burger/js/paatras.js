document.getElementById('btnAtras').addEventListener('click', function() {
    window.history.back();
});
/*para la pagina de detalles de pedidos*/

function renderizarCarrito() {
    const resumenCarrito = document.querySelector('.resumen-carrito');
    if (cartItems && cartItems.length > 0) {
        cartItems.forEach(item => {
            resumenCarrito.innerHTML += `
                <div class="item-content">
                    <h5>${item.title}</h5>
                    <h5 class="cart-price">${item.price} Bs</h5>
                    <span class="quantity">Cantidad: ${item.amount}</span>
                </div>
            `;
        });
    } else {
        resumenCarrito.innerHTML = '<p>No hay productos en el carrito.</p>';
    }
}