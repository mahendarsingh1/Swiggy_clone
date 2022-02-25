function paragraph(text,classList){ 
    return `<p class="${arrayToString(classList)}">${text}</p>`
}

function button(text,classList){
    return `<button class="${arrayToString(classList)}">${text}</button>`
}

function img(src, classList){
    return `<img class="${arrayToString(classList)}" src=${src}>`
}

function flexDiv(item){
    return ('<div class="flex-space-between">' +
                '<div>' +
                    `<h3 class="margin-tb-8">${item.heading}</h3>` +
                    paragraph(item.amount, ["margi-tb-8"]) +
                '</div>' +
                button('ADD',["food-list-item-button"]) +
            '</div>');
}

function foodItem(item){
    return '<div class="food-list-item">' +
                img(item.img, ["margin-tb-8", "height-20"]) +
                flexDiv(item) +
                paragraph(item.description, ["margin-tb-8", "op-6"]) +
            '</div>' + 
            '<hr></hr>';
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


function arrayToString(arr){
    let str='';
    arr.forEach(ele => {
        str = str + String(ele)+' ';
    });
    return str;
}
