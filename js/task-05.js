const input = document.querySelector('#name-input')
const span = document.querySelector('#name-output')

input.addEventListener('input', onInput)

function onInput(e){
    if(!e.currentTarget.value.length){
        span.textContent =  'Anonymos';
    } else {
        span.textContent = e.currentTarget.value;
    }
}