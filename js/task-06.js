const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInput);

function onInput (e){
    const dataLength = Number(input.getAttribute('data-length'));

    const inputValue = input.value.trim();
    const inputLength = inputValue.length;

    if (inputLength === dataLength) {
      input.classList.remove('invalid');
      input.classList.add('valid');
    } else {
      input.classList.remove('valid');
      input.classList.add('invalid');
    }
}