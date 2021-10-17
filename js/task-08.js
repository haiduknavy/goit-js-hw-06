const refs = {
    form: document.querySelector('.login-form'),
    email: document.querySelector('input[type="email"]'),
    password: document.querySelector('input[type="password"]'),
    button: document.querySelector('button')
};

function onButtonSubmit(event) {
    event.preventDefault();
    if (refs.email.value.length === 0 || refs.password.value.length === 0) {
        alert('Вы заполнили не все поля')
    }
    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;
    const formData = {
        email,
        password,
    }
    console.log(formData)
    event.currentTarget.reset()
};

refs.form.addEventListener('submit', onButtonSubmit);