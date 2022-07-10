const categories = document.querySelector("#categories");
console.log('Number of categories:', categories.childElementCount)

const items = document.querySelectorAll(".item");
[...items].forEach(function (el) {
    const numberOfElements = el.querySelectorAll('li');
    const nameOfElements = el.querySelector('h2');
    console.log('Category:', nameOfElements.textContent);
    console.log('Elements:', numberOfElements.length);
});

