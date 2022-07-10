const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.querySelector('#ingredients')

const creatLi = (count) => {
  for (let i = 0; i < count; i += 1 ) {
    const li = document.createElement("li");
    li.textContent = `${i}`;
    ul.append(li);
  }
}
creatLi (ingredients.length)

const markup = ingredients
  .map((ingredient) => `<li class="item">${ingredient}</li>`)
  .join("");
  ul.innerHTML = markup;

console.log(markup)