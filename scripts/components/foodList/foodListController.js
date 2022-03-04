import FoodListModel from './foodListModel.js'
import FoodListView from './foodListView.js'

<<<<<<< HEAD
var FoodListController = function(){
    this.foodListModel = new FoodListModel();
    this.foodListView = new FoodListView();
}

FoodListController.prototype.init = function(){
=======
var FoodListController = function(cartController){
    this.foodListModel = new FoodListModel();
    this.foodListView = new FoodListView();
    this.cartController = cartController;
}

FoodListController.prototype.init = function(){
    let addToCartHandler = this.handleAddToCart.bind(this);
    this.foodListView.init(addToCartHandler);
>>>>>>> feature/cart
    return new Promise((resolve,reject)=>{
        this.foodListModel.loadData(resolve,reject);
    })
}

FoodListController.prototype.render = function(){
    let foodListData = this.foodListModel.getData();
    this.foodListView.render(foodListData);
}

<<<<<<< HEAD
=======
FoodListController.prototype.handleAddToCart = function(id){
    let item = this.foodListModel.getDataById(id);
    if(item)    this.cartController.handleAddToCart(item);
}

>>>>>>> feature/cart
export default FoodListController;