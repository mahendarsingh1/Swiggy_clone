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

FoodListModel.prototype.getDataById = function(id){
    for(let category in this.foodItems){
        let items = this.foodItems[category];
        let matchingItem = items.find(item =>item.id===Number(id));
        if(matchingItem)    return matchingItem;
    }
}

export default FoodListModel;