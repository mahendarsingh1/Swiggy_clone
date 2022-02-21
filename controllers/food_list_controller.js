import food_list_model from '../models/food_list_model.js'
import food_list_view from '../views/food_list_view.js'

var controller = function(){}

controller.prototype.init = function(){

    new Promise(function(resolve,reject){
        food_list_model.prototype.getData('../data.js',resolve,reject);
    })
    .then((data) => food_list_view.prototype.render(data))
    .catch((err)=> console.log(err))
}

export default controller;