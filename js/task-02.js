const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients')
  const ingredientsMaker = array => {
    return array.map(ingredient => {
      const liEl = document.createElement('li');
      liEl.classList.add('item');
      liEl.textContent = ingredient;
      return liEl;
    });
  };
const elements = ingredientsMaker(ingredients);
list.append(...elements);
console.log(list);