import { CartModel } from './cartModel.js'
import { CartView } from './cartView.js'

export function CartController(){
    this.cartModel = new CartModel();
    this.cartView = new CartView();
}

CartController.prototype.init = function(){
    
    let updateHandler = this.handleUpdateCartItem.bind(this);
    let checkoutHandler = this.handleCheckout.bind(this);
    this.cartView.init(updateHandler, checkoutHandler);
    
    this.getDataAndRender();
}

CartController.prototype.getDataAndRender = function(){
    let data = this.cartModel.getData();
    this.cartView.render(data);
}

CartController.prototype.handleAddToCart = function(item){
    this.cartModel.addToCart(item);
    this.getDataAndRender();
}

CartController.prototype.handleUpdateCartItem = function(id,type){
    this.cartModel.updateCartItem(id, type);
    this.getDataAndRender();
}

CartController.prototype.handleCheckout = function(){
    this.cartModel.checkout();
    this.getDataAndRender();
}