const listEl = document.querySelector('#categories');
console.log(`Number of categories: ${listEl.children.length}`);

const itemsEl = document.querySelectorAll('.item');

const itemTitleCategories = itemsEl.forEach(itemEl => {
  console.log(`Category: ${itemEl.firstElementChild.textContent}`);
  console.log(`Elements: ${itemEl.lastElementChild.children.length}`);
});
