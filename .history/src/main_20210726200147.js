function loadItems() {
    return fetch('data/data/json');
}



loadItems()
.then(items => {
    displayItems(items);
    setEventListeners(items);
})
.catch(console.log);