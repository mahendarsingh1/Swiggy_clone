export function CartModel(){
    this.cartData = {
        items:[],
        totalAmount:0,
        totalQuantity:0
    };
}

CartModel.prototype.getData = function(){
    return this.cartData;
}

CartModel.prototype.addToCart = function(newItem){
    let sameItem = this.cartData.items.find((item)=>item.id===newItem.id)
    if(!sameItem) {
        this.cartData.items.push({...newItem,quantity:1});
        this.cartData.totalQuantity += 1;
        this.cartData.totalAmount += newItem.amount;
    }  
}

CartModel.prototype.updateCartItem = function(id,type){
    let item = this.cartData.items.find(item => item.id===Number(id))
    if(!item)   return;
    if(type==='+')  {
        item.quantity += 1;
        this.cartData.totalAmount += item.amount;
        this.cartData.totalQuantity += 1;
    }    
    else {
        item.quantity -= 1;
        this.cartData.totalAmount -= item.amount;
        this.cartData.totalQuantity -= 1;
        if(item.quantity === 0){
            this.cartData.items = this.cartData.items.filter(item => item.id!==Number(id))
        }
    }
}