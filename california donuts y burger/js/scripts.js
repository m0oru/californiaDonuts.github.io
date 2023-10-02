const btnTodos = document.querySelector('.todos');
const btnBurguers = document.querySelector('.burguers');
const btnDonuts = document.querySelector('.donuts');
const btnSandwichs = document.querySelector('.sandwichs');
const btntexMexs = document.querySelector('.texMexs');
const btnPlatosEspeciales = document.querySelector('.platosEspeciales');
const contenedorProductos = document.querySelector('.productos');

document.addEventListener('DOMContentLoaded', ()=>{
    productos();
});

const productos = () => {
    let productoArreglo = [];
    const productos = document.querySelectorAll('.producto');

    productos.forEach(producto=> productoArreglo = [...productoArreglo, producto])

    const burguers = productoArreglo.filter(burguer=> burguer.getAttribute('data-producto') === 'burguer');
    const donuts = productoArreglo.filter(donut=> donut.getAttribute('data-producto') === 'donut');
    const sandwichs = productoArreglo.filter(sandwich=> sandwich.getAttribute ('data-producto') === 'sandwich');
    const texMexs = productoArreglo.filter(texmex=> texmex.getAttribute ('data-producto') === 'texMex');
    const platosEspeciales = productoArreglo.filter(platoespecial=> platoespecial.getAttribute ('data-producto') === 'platosEspecial');

    mostrarPlatillos(burguers, donuts, sandwichs, texMexs, platosEspeciales, productoArreglo);
    
}

const mostrarPlatillos = (burguers, donuts, sandwichs, texMexs, platosEspeciales, todos) =>{
    btnBurguers.addEventListener('click', ()=>{
        limpiarHtml(contenedorProductos);
        burguers.forEach(burguer=> contenedorProductos.appendChild(burguer));
    });

    btnDonuts.addEventListener('click', ()=>{
        limpiarHtml(contenedorProductos);
        donuts.forEach(burguer=> contenedorProductos.appendChild(burguer));
    });

    btnSandwichs.addEventListener('click', ()=>{
        limpiarHtml(contenedorProductos);
        sandwichs.forEach(sandwich=> contenedorProductos.appendChild(sandwich));
    });

    btntexMexs.addEventListener('click', ()=>{
        limpiarHtml(contenedorProductos);
        texMexs.forEach(texmex=> contenedorProductos.appendChild(texmex));
    });

    btnPlatosEspeciales.addEventListener('click', ()=>{
        limpiarHtml(contenedorProductos);
        platosEspeciales.forEach(platoespecial=> contenedorProductos.appendChild(platoespecial));
    });

    btnTodos.addEventListener('click',()=>{
        limpiarHtml(contenedorProductos);
        todos.forEach(todo=> contenedorProductos.appendChild(todo));
    });
}
const limpiarHtml = (contenedor) =>{
    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild);
    }
}
