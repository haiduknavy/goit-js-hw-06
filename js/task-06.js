const inputRef = document.querySelector('#validation-input');
inputRef.addEventListener('blur', (event) => {
    if (event.currentTarget.value.length > event.currentTarget.dataset.length || event.currentTarget.value.length < event.currentTarget.dataset.length) {
        event.currentTarget.classList.add('invalid');
        event.currentTarget.classList.remove('valid');
    } else {
        event.currentTarget.classList.add('valid');
        event.currentTarget.classList.remove('invalid');
    }
})