
let cart = {};

function updateCartSummary() {
    const cartSummaryElement = document.getElementById('cart-summary');
    if (cartSummaryElement) {
        let cartSummaryHTML = '<h2>Carrito de Compras</h2>';
        for (const product in cart) {
            if (cart.hasOwnProperty(product) && cart[product] > 0) {
                cartSummaryHTML += `<div class="cart-item">${product}: ${cart[product]} - Precio: $ ${cart[product] * getPrecioProducto(product)}</div>`;
            }
        }
        cartSummaryHTML += '<button class="checkout-button" onclick="finalizarCompra()">Finalizar Compra</button>';
        cartSummaryElement.innerHTML = cartSummaryHTML;
    }
}


function addToCart(product) {
    if (!cart[product]) {
        cart[product] = 0;
    }
    cart[product]++;
    updateCounter(product);
    updateTotalCart();
}


function hideCart() {
    const cartSummaryElement = document.getElementById('cart-summary');
    if (cartSummaryElement) {
        cartSummaryElement.classList.remove('show');
    }
}

function showCartSummary() {
    updateCartSummary();
    showCart();
}

function updateTotalCart() {
    const totalCartElement = document.getElementById('total-cart');
    if (totalCartElement) {
        const totalItems = Object.values(cart).reduce((total, count) => total + count, 0);
        totalCartElement.innerText = totalItems;
    }
}


function showCart() {
    const cartSummaryElement = document.getElementById('cart-summary');
    if (cartSummaryElement) {
        const closeButton = document.createElement('span');
        closeButton.className = 'close-button';
        closeButton.innerHTML = '&times;';
        closeButton.onclick = hideCart;
        cartSummaryElement.appendChild(closeButton);

        cartSummaryElement.classList.add('show');
    }
}

function updateCounter(product) {
    const counterElement = document.getElementById(`counter-${product.replace(/ /g, '-')}`);
    if (counterElement) {
        counterElement.innerText = cart[product];
    }
}

function decrementQuantity(product) {
    if (cart[product] && cart[product] > 0) {
        cart[product]--;
        updateCounter(product);
        updateTotalCart();
        updateCartItems();
        updateCartSummary();
    }
}

function incrementQuantity(product) {
    cart[product]++;
    updateCounter(product);
    updateTotalCart();
    updateCartItems();
    updateCartSummary();
}

function finalizarCompra() {
    hideCart();
    alert("¡Compra Finalizada!");
}

function getPrecioProducto(product) {
    return (4500);
}



function removeFromCart(product) {
    if (cart[product] && cart[product] > 0) {
        cart[product]--;
        updateCounter(product);
        updateTotalCart();
    }
}

