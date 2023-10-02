//variables 
let allContainerCart = document.querySelector('.productos');
let containerBuyCart = document.querySelector('.card-items');
let priceTotal = document.querySelector('.price-total')
let amountProduct = document.querySelector('.count-product');


let buyThings = [];
let totalCard = 0;
let countProduct = 0;

function procederPedido() {
    // Aquí puedes agregar código adicional si necesitas hacer alguna validación previa
    // Por ejemplo: Si el carrito está vacío, mostrar un mensaje de alerta
    
    window.location.href = 'detallePedidos.html'; // Cambia 'tu_pagina_de_detalles.html' por el nombre real de tu página de detalles
}

//funciones
loadEventListenrs();
function loadEventListenrs(){
    allContainerCart.addEventListener('click', addProducto);
    containerBuyCart.addEventListener('click', updateQuantity);
    containerBuyCart.addEventListener('click', deleteProduct);

}

function addProducto(e){
    e.preventDefault();
    if (e.target.classList.contains('btn-add-cart')){
        const selectProduct = e.target.parentElement;
        readTheContent(selectProduct);
    }
}

function deleteProduct(e){
    if (e.target.classList.contains('delete-product')){
        const deleteId = e.target.getAttribute('data-id');

        buyThings.forEach(value => {
            if (value.id == deleteId) {
                let priceReduce = parseFloat(value.price) * parseFloat(value.amount);
                totalCard = totalCard - priceReduce;
                totalCard = totalCard.toFixed(2);
            }
        });
        buyThings = buyThings.filter(product => product.id !== deleteId)
        
        countProduct--;
    }

    if (buyThings.length === 0) {
        priceTotal.innerHTML = 0;
        amountProduct.innerHTML = 0;
    }
    loadHtml();
}

function readTheContent(product){
    const infoProduct ={
        tittle: product.querySelector('h2').textContent,
        price: product.querySelector('p span').textContent,
        id: product.querySelector('a').getAttribute('data-id'),
        amount: 1
    }

    totalCard = parseFloat(totalCard) + parseFloat(infoProduct.price);
    totalCard = totalCard.toFixed(2);


    const exit = buyThings.some(product => product.id === infoProduct.id);
    if (exit) { 
        const pro = buyThings.map(product => {
            if (product.id === infoProduct.id) {
                product.amount++;
                return product;
            }else{
                return product
            }
        });
        buyThings = [...pro];
    }else{
        buyThings = [...buyThings, infoProduct]
        countProduct++;
    }
    loadHtml();
    //console.log(infoProduct);
}

function loadHtml(){
    clearHtml();
    buyThings.forEach(product => {
        const {tittle, price, amount, id} = product;
        const row = document.createElement('div');
        row.classList.add('item');
        row.innerHTML = `
            <div class="item-content">
                <h5>${tittle}</h5>
                <h5 class="cart-price">${price}</h5>
                <div class="quantity-control">
                    <button class="decrease" data-id="${id}">-</button>
                    <span class="quantity">${amount}</span>
                    <button class="increase" data-id="${id}">+</button>
                </div>
            </div>
            <span class="delete-product" data-id="${id}">X</span>
        `;

        containerBuyCart.appendChild(row);

        priceTotal.innerHTML = totalCard;

        amountProduct.innerHTML = countProduct;
    });
}

function clearHtml(){
    containerBuyCart.innerHTML = '';
}

function toggleCart() {
    var cart = document.getElementById("products-id");
    if (cart.style.display === "block") {
        cart.style.display = "none";
    } else {
        cart.style.display = "block";
    }
}

function loadEventListeners() {
    allContainerCart.addEventListener('click', addProducto);
    containerBuyCart.addEventListener('click', deleteProduct);
    containerBuyCart.addEventListener('click', updateQuantity);
}

function updateQuantity(e) {
    if (e.target.classList.contains('decrease') || e.target.classList.contains('increase')) {
        const productId = e.target.getAttribute('data-id');
        const selectedProduct = buyThings.find(product => product.id === productId);
        const productQuantityElem = e.target.parentElement.querySelector('.quantity');

        if (e.target.classList.contains('decrease')) {
            if (selectedProduct.amount > 1) {
                selectedProduct.amount--;
            }
        }

        if (e.target.classList.contains('increase')) {
            selectedProduct.amount++;
        }

        productQuantityElem.textContent = selectedProduct.amount;
        recalculateTotal();
        loadHtml();
    }
}

function recalculateTotal() {
    totalCard = 0;
    buyThings.forEach(product => {
        totalCard += parseFloat(product.price) * product.amount;
    });
    totalCard = totalCard.toFixed(2);
}