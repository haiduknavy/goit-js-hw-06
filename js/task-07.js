const input = document.querySelector('#font-size-control');
const span = document.querySelector('#text');

function onInputChange() {
    span.style.fontSize = `${event.currentTarget.value}px`;
}
input.addEventListener('change', onInputChange);