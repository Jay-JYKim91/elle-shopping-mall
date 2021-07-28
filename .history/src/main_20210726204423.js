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
    const target = event.target
    const key = target.dataset.key;
    const value = target.dataset.value;

    if(key == null || value == null) {
        return;
    }
    updateItems(items, key, value);
}

function updateItems(items, key, value) {
    console.log(items);
    items.forEach(item => {
        console.log(item);
        // if (item.key === value) {
            
        //     item.classList.remove('invisible');
        // } else {
        //     item.classList.add('invisible');
        // }
    })
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