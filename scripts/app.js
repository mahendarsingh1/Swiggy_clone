import FoodListController from './components/foodList/foodListController.js'

document.addEventListener('DOMContentLoaded',()=>{
    let foodListController = new FoodListController();
    foodListController.init()
        .then(()=> foodListController.render())
});