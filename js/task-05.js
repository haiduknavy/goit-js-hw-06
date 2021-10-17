const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

function onInput() {
    if (event.currentTarget.value.length === 0) {
        output.textContent = "Anonymous";
    } else {
        output.textContent = event.currentTarget.value
    }
};

input.addEventListener('input', onInput);
 
