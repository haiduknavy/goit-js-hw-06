const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const markup = ingredients.map((ingredient) => {
  const listItem = document.createElement("li");
  listItem.textContent = ingredient;
  listItem.classList.add("item");
  return listItem;
});

list.append(...markup);
