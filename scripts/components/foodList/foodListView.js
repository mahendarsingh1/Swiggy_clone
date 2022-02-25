import { foodListElement } from '../../constants/htmlElements.js'
import { foodList} from "./foodListHelper.js";

var FoodListView = function(){}

FoodListView.prototype.render = function(data){    
    
    foodListElement.innerHTML = foodList(data);
}

export default FoodListView;

