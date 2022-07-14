const input = document.querySelector('#validation-input');
const validLength = input.getAttribute("data-length")


input.addEventListener ('blur', () => {
    if (input.value.length < validLength) {
        input.classList.add('invalid')
        input.classList.remove('valid')
        console.log("<6")
    }
    else {
        input.classList.add('valid')
        input.classList.remove('invalid')
        console.log(">6")
    }
    })