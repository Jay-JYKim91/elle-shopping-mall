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
function onBtnClick(event, items) {
    const dataset = event.target.dataset;
    const key = dataset.key;
    const value = dataset.value;
    console.log(event.target.dataset.key);
}
function setEventListeners(items) {
    const logo = document.querySelector('.logo');
    const btns = document.querySelector('.options');
    logo.addEventListener('click', ()=> displayItems(items));
    btns.addEventListener('click', event => onBtnClick(event, items));
}
loadItems()
.then(items => {
    displayItems(items);
    setEventListeners(items);
})
.catch(console.log);