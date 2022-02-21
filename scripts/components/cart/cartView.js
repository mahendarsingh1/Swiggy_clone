import {htmlElements} from '../../constants/htmlElements.js'
import { emptyCart, renderCart } from "./cartHelper.js"

export function CartView(){
    this.cartElement = htmlElements.cartElement;
}

CartView.prototype.init = function(updateCartItems){
    this.cartElement.addEventListener('click',function handleClick(event){
        let target = event.target;
        if(target.tagName==='SPAN'){
            let id = target.dataset.id;
            let type = target.dataset.type;
            updateCartItems(id,type);
        }
    })
}

CartView.prototype.render = function(cartData){
    if(cartData.items.length === 0)
        this.cartElement.innerHTML = emptyCart();
    else
        this.cartElement.innerHTML = renderCart(cartData);
}