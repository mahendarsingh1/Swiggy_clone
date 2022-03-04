function flexDiv(item){
    return `
<<<<<<< HEAD
            <div class="flex-space-between">
                <div>
                    <h3 class="margin-tb-8">${item.heading}</h3>
                    <p class="margin-tb-8">${item.amount}</p>
                </div>
                <button class="food-list-item-button">ADD</button>
=======
            <div class="flex-space-between w-90">
                <div>
                    <h3 class="margin-tb-8">${item.heading}</h3>
                    <p class="margin-tb-8">₹${item.amount}</p>
                </div>
                <button class="food-list-item-button" data-id="${item.id}">ADD</button>
>>>>>>> feature/cart
            </div>
        `;
}

function foodItem(item){
    return `
        <div class="food-list-item">
            <img src=${item.img} class="margin-tb-8 height-20">
                ${flexDiv(item)}
                <p class="margin-tb-8 op-6">${item.description}</p>
            </div>
            <hr></hr>
        `;
}


export function foodList(data){
    let list_innerhtml = '';
    let section_innerhtml = '';
    
    for (const section in data) {
        const items = data[section];
        
        section_innerhtml = `<h2 id="${section.toLowerCase()}">${section}</h2>` +
                            `<p class="op-9">${section.length} ITEMS</p>`;

        items.forEach(item =>section_innerhtml = section_innerhtml + foodItem(item));
        
        list_innerhtml = list_innerhtml + section_innerhtml;
    }
    return list_innerhtml;
}