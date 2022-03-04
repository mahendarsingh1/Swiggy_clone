import { CartController } from './components/cart/cartController.js';
import FoodListController from './components/foodList/foodListController.js'

document.addEventListener('DOMContentLoaded',()=>{
    let cartController = new CartController();
    let foodListController = new FoodListController(cartController);

    foodListController.init().then(()=> foodListController.render())
    
    cartController.init();
    
});