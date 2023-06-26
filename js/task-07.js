const input = document.querySelector('#font-size-control');
const span = document.querySelector('#text')
input.value = input.min;

input.addEventListener('input',onInput)

function onInput (e){
   const fontSize = input.value;

   span.style.fontSize = `${fontSize}px`;
};