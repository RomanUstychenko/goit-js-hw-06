const value = document.querySelector('#value');
const counterValue = 0;
const btn = document.querySelector('#counter')
const firstBtn = 
console.log(btn.firstElementChild)
console.log(btn.lastElementChild)
// const firstBtn = btn.childNodes[3];
// console.log(firstBtn)

btn.firstElementChild.addEventListener("click", () => {
    console.log("Button was clicked");
  });
