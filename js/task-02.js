const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients')

const creatLi = (count) => {
  for (let i = 0; i < count; i += 1 ) {
    const li = document.createElement("li");
    li.textContent = `${i}`;
    list.append(li);
  }
}
creatLi (ingredients.length)

const markup = ingredients
  .map((ingredient) => `<li class="item">${ingredient}</li>`)
  .join("");
  list.innerHTML = markup;