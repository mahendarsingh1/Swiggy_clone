import { CartModel } from './cartModel.js'
import { CartView } from './cartView.js'

export function CartController(){
    this.cartModel = new CartModel();
    this.cartView = new CartView();
}

CartController.prototype.init = function(){
    
    let updateHandler = this.handleUpdateCartItem.bind(this);
    this.cartView.init(updateHandler);
    
    let data = this.cartModel.getData();
    this.cartView.render(data);
}

CartController.prototype.handleAddToCart = function(item){
    this.cartModel.addToCart(item);
    let data = this.cartModel.getData();
    this.cartView.render(data);
}

CartController.prototype.handleUpdateCartItem = function(id,type){
    this.cartModel.updateCartItem(id, type);
    let data = this.cartModel.getData();
    this.cartView.render(data);
}