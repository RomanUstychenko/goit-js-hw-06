const counterValue = document.querySelector('#value');
const btn = document.querySelector('#counter')
console.log(counterValue.textContent)



// btn.firstElementChild.addEventListener("click", (value) => {
//     // console.log("-1");
//     value - 1;
//   });
//   btn.lastElementChild.addEventListener("click", () => {
//     console.log("+1");
//   });



  // const button = document.querySelector(".my-button");

const minus = () => {
  counterValue.innerHTML -= 1;
  console.log("-1");
};
btn.firstElementChild.addEventListener("click", minus);

const plus = () => {
  counterValue.innerHTML += 1;
  console.log("+1");
};
btn.lastElementChild.addEventListener("click", plus);