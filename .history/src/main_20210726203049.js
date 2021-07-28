function loadItems() {
    return fetch('data/data.json')
    .then(response => response.json())
    .then(json => json.items);
}

function displayItems(items) {
    const lists = document.querySelector('.lists');
    lists.innerHTML = items.map(item => createHTMLString(item)).join('');
}
function createHTMLString(item) {
    return `
        <li class="list">
            <img src="${item.image}" alt="${item.img}">
            <div class="description">
                <p>${item.gender} ${item.size}</p>
            </div>
        </li>
    `
}
// function onBtnClick(event, items) {
//     const dataset = event.target.dataset;
//     const key = dataset.key;
//     const value = dataset.value;

//     if(key == null || value == null) {
//         return;
//     }
//     const filtered = items.filter(item => item[key] == value);
//     // console.log(filtered);
//     displayItems(filtered);
// }

function updateItems(items, key, value) {
    items.forEach(item => {
        if (item.dataset[key] === value) {
            item.classList.remove('invisible');
        } else {
            item.classList.add('invisible');
        }
    })
}
function setEventListeners(items) {
    const logo = document.querySelector('.logo');
    const btns = document.querySelector('.options');
    logo.addEventListener('click', ()=> displayItems(items));
    btns.addEventListener('click', event => updateItems(event, items));
}
loadItems()
.then(items => {
    displayItems(items);
    setEventListeners(items);
})
.catch(console.log);