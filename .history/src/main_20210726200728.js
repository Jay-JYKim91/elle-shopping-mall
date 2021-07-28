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
        <img src="./img/pink_s.png" alt="">
        <div class="description">
        <p>female, large</p>
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