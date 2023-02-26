const listEl = document.querySelector('#categories');
const itemsEl = listEl.querySelectorAll('.item');
console.log('Number of categories:', itemsEl.length);

    itemsEl.forEach(element => {
    const elementName = element.querySelector('h2').textContent;
    const categoryEl = element.querySelectorAll('li').length;

    console.log('Category:', elementName);
    console.log('Elements', categoryEl);
});


