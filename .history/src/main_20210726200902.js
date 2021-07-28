function loadItems() {
    return fetch('data/data.json')
    .then(response => response.json())
    .then(json => json.items);
}

function displayItems(items) {
    const lists = document.querySelector('.lists');
    lists.innerHTML = items.map(item => createHTMLString(item));
}
function createHTMLString(item) {
    return `
        <li class="list">
            <img src="./img/${item.img}" alt="${item.img}">
            <div class="description">
                <p>${item.gender} ${item.size}</p>
            </div>
        </li>
    `
}
loadItems()
.then(items => {
    displayItems(items);
    // setEventListeners(items);
})
.catch(console.log);