export function emptyCart(){
    return `
            <h2>Cart Empty</h2>
            <img  src="/assets/images/cart_empty.webp" alt="" height="220px">
            <p>Good food is always cooking! 
            <br>
            Go ahead, order some yummy items from the menu.</p>
    `;
}

export function renderCart(cartData){
    return `
        <h2>Cart</h2>
        <p>${cartData.totalQuantity} ITEMS</p>
        ${rendercartItems(cartData.items)}
        ${renderTotal(cartData)}
    `;
}

function rendercartItems(items){
    let cartItems = '';
    items.forEach(item => {
        cartItems = cartItems +
            `<div class="cartItem flex-space-between">
                <div class="flex">
                    <img src="${item.img}" alt="" height="15px">
                    <p>${item.heading}</p>
                </div>
                <div class="flex align-items-center">
                    <div class="quantityControllers flex-space-around align-items-center">
                        <span data-id="${item.id}" data-type="-">-</span>${item.quantity}<span data-id="${item.id}" data-type="+">+</span>
                    </div>
                    <p>₹${item.amount * item.quantity}</p>
                </div>
            </div>`
    });
    return cartItems;
}

function renderTotal(cartData){
    return `
        <div id="totalAmount" class="flex-space-between">
            <h4>SubTotal</h4>
            <h4>₹${cartData.totalAmount}</h4>
        </div>
        <button id="checkout-button">CHECKOUT →</button>
    `;
}