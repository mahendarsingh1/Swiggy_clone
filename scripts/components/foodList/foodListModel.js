import {fetchData} from '../../helper/api.js'
const dataEndpoint = '../../../data/foodList.json';

var FoodListModel = function(){
    this.foodItems = {};
}

FoodListModel.prototype.loadData = function(resolve,reject){
    new Promise((resolve,reject)=>{
        fetchData(dataEndpoint, resolve,reject);
    }).then(data=>{
        this.foodItems = data;
        resolve();
    })
}

FoodListModel.prototype.getData = function(){
        return this.foodItems;
}

export default FoodListModel;