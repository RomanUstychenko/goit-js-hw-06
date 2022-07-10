const value = document.querySelector('#value');
const counterValue = 0;
const btn = document.querySelector('#counter')
console.log(btn.firstElementChild)
console.log(btn.lastElementChild)


btn.firstElementChild.addEventListener("click", () => {
    console.log("Button was clicked");
  });
