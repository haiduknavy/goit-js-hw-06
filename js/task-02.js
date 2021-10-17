const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients')
const createIngredients = (ingredients) => {
  return ingredients.map(el => {
  const itemEl = document.createElement('li');
  itemEl.classList.add('item');
  itemEl.textContent = el;
  return itemEl;
});
}
const elements = createIngredients(ingredients)
ingredientsEl.append(...elements)