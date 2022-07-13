const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');
console.log(nameInput.value)

nameInput.addEventListener( 'input', () => {
    if (nameInput.value !== "") {
        nameOutput.innerHTML = nameInput.value
    }
    else {nameOutput.innerHTML = "Anonymous"}
    })