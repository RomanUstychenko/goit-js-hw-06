let value = document.querySelector('#value');
let counterValue = 0;
const btn = document.querySelector('#counter')
console.log(btn.firstElementChild.textContent)




const minus = () => {
  counterValue += Number(btn.firstElementChild.textContent);
  value.innerHTML = Number(counterValue);
  console.log(counterValue)
};
btn.firstElementChild.addEventListener("click", minus);

const plus = () => {
  counterValue += Number(btn.lastElementChild.textContent);
  value.innerHTML = Number(counterValue);
};
btn.lastElementChild.addEventListener("click", plus);