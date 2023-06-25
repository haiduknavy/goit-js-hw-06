const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInput);

function onInput (e){
    if(e.currentTarget.value.length != e.currentTarget.getAttribute('data-length')){
        e.currentTarget.classList.add('invalid')
        e.currentTarget.classList.remove('valid')
    } else {
        e.currentTarget.classList.add('valid')
        e.currentTarget.classList.remove('invalid')
    }
}