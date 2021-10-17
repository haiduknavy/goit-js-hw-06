function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
button :document.querySelector('.change-color'),
body :document.querySelector('body'),
span :document.querySelector('.color'),
}

function onButtonClick(event) {
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.span.textContent = getRandomHexColor();
}

refs.button.addEventListener ('click', onButtonClick)