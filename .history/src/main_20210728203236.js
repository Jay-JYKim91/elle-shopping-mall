function loadItems() {
    return fetch('data/data.json')
        .then(response => response.json())
        .then(json => json.items);
}

function createElement(item) {
    const img = document.createElement('img');
    img.setAttribute('src', item.image);

    const description = document.createElement('div');
    description.setAttribute('class', 'description');
    description.innerText = `${item.gender} ${item.size} size`;

    const li = document.createElement('li');
    li.setAttribute('class','list');
    li.setAttribute('data-type', item.type);
    li.setAttribute('data-color', 'item.color');
    li.append(img);
    li.append(description);
    return li;
}
// function displayItems(items) {
//     const lists = document.querySelector('.lists');

//     lists.innerHTML = items.map(item => createHTMLString(item)).join('');
// }
// function createHTMLString(item) {
//     return `
//         <li class="list">
//             <img src="${item.image}" alt="${item.img}">
//             <div class="description">
//                 <p>${item.gender} ${item.size}</p>
//             </div>
//         </li>
//     `
// }
function onBtnClick(event, items) {
    const target = event.target
    const key = target.dataset.key;
    const value = target.dataset.value;

    if(key == null || value == null) {
        return;
    }

    const filtered = items.filter(item => item[key] === value);
    displayItems(filtered);
    //updateItems(items, key, value);
}



// function updateItems(items, key, value) {

//     items.forEach(item => {
//         if (item[key] === value) {
//             console.log(list);
//             list.classList.remove('invisible');
//         } else {
//             console.log(list);
//             list.classList.add('invisible');
//         }
//     })
// }
function setEventListeners(items) {
    const logo = document.querySelector('.logo');
    const btns = document.querySelector('.options');
    logo.addEventListener('click', ()=> displayItems(items));
    btns.addEventListener('click', event => onBtnClick(event, items));
}

loadItems()
.then(items => {
    // const list = items.map(createElement);
    // const lists = document.querySelector('.lists');
    // lists.append(...list);
    // const btns = document.querySelector('.options');
    // btns.addEventListener('click', event => onBtnClick(event, list));
    displayItems(items);
    setEventListeners(items);
})
.catch(console.log);