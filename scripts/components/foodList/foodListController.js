import FoodListModel from './foodListModel.js'
import FoodListView from './foodListView.js'

var FoodListController = function(){
    this.foodListModel = new FoodListModel();
    this.foodListView = new FoodListView();
}

FoodListController.prototype.init = function(){
    return new Promise((resolve,reject)=>{
        this.foodListModel.loadData(resolve,reject);
    })
}

FoodListController.prototype.render = function(){
    let foodListData = this.foodListModel.getData();
    this.foodListView.render(foodListData);
}

export default FoodListController;