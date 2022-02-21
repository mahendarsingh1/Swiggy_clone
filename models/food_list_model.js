var model = function(){}

model.prototype.getData= function (url, resolve, reject) {

    fetch(url)
        .then((response) => response.json())
        .then(data =>  resolve(data))
        .catch(err => reject(err));
}

export default model;