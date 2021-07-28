function loadItems() {
    return fetch('data/data.json')
    .then(response => response.json())
    .then(json => json.items);
}

function displayItems(items) {
    const lists = document.querySelector('.lists');
}

loadItems()
.then(items => {
    displayItems(items);
    // setEventListeners(items);
})
.catch(console.log);