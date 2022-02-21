var view = function(){}

view.prototype.render = function(data){

    const list = document.getElementById('food-list');
    let list_innerhtml = '';
    let section_innerhtml = "";

    for (const section in data) {
            section_innerhtml = `<h2>${section}</h2>` +
                                `<p class="op-9">${section.length} ITEMS</p>`;
            const items = data[section];
            items.forEach(item => {
                let food_item = '<div class="food-list-item">' +
                                    `<img class="margin-tb-8" src="/assets/images/${item.img}" alt="" height="20px">` +
                                    '<div class="flex-space-between">' +
                                        '<div>' +
                                            `<h3 class="margin-tb-8">${item.heading}</h3>
                                            <p class="margin-tb-8">${item.amount}</p>` +
                                        '</div>' +
                                        '<button class="food-list-item-button">ADD</button>' +
                                    '</div>' +
                                    `<p class="margin-tb-8 op-6">${item.description}</p>` +
                                '</div>' + 
                                '<hr></hr>';
        
                section_innerhtml = section_innerhtml + food_item;
            });
            list_innerhtml = list_innerhtml + section_innerhtml;
        
    }
    
    list.innerHTML = list_innerhtml;
}

export default view;