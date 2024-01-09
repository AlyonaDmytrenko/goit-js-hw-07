const categoriesList = document.getElementById('categories');

const categoryItems = categoriesList.querySelectorAll('li.item');

console.log(`Namber of category: ${categoryItems.length}`);

categoryItems.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;

  const categoryItemsCount = category.querySelectorAll('ul li').length;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements ${categoryItemsCount}`);
});
