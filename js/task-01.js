
const categories = document.querySelector('#categories');
const itemEl = categories.querySelectorAll('.item');
const categoriesH2 = categories.querySelectorAll('h2');
const categoriesUl = categories.querySelectorAll('ul');
const animalsLength = categoriesUl[0].querySelectorAll('li').length;
const productsLength = categoriesUl[1].querySelectorAll('li').length;
const technologiesLength = categoriesUl[2].querySelectorAll('li').length;

console.log(`Number of categories: ${itemEl.length}`)

//Animals
console.log(`Category: ${categoriesH2[0].textContent}`);
console.log(`Elements: ${animalsLength}`)
// Products
console.log(`Category: ${categoriesH2[1].textContent}`);
console.log(`Elements: ${productsLength}`)
// Technologies
console.log(`Category: ${categoriesH2[2].textContent}`);
console.log(`Elements: ${technologiesLength}`)
