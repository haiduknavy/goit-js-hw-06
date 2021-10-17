const inputRef = document.querySelector('#validation-input');
inputRef.addEventListener('blur', (event) => {
    if (event.currentTarget.value.length > event.currentTarget.dataset.length) {
        event.currentTarget.classList.toggle('invalid')
    } else {
        event.currentTarget.classList.toggle('valid')
    }
})