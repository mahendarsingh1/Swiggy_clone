<<<<<<< HEAD
import { foodListElement } from '../../constants/htmlElements.js'
import { foodList} from "./foodListHelper.js";

var FoodListView = function(){}

FoodListView.prototype.render = function(data){    
    
    foodListElement.innerHTML = foodList(data);
=======
import { htmlElements } from '../../constants/htmlElements.js'
import { foodList} from "./foodListHelper.js";

var FoodListView = function(){
    this.foodListElement = htmlElements.foodListElement;
}

FoodListView.prototype.init = function(handleAddToCart){
    this.foodListElement.addEventListener('click',function handleClick(event){
        if(event.target.tagName === 'BUTTON'){
            let id = event.target.dataset.id;
            handleAddToCart(id);
        }
    })
}

FoodListView.prototype.render = function(data){    
    this.foodListElement.innerHTML = foodList(data);
>>>>>>> feature/cart
}

export default FoodListView;

