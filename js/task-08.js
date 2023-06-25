const form = document.querySelector('.login-form');

form.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();

    const {email, password} = e.currentTarget.elements;

    const data = {
        email: email.value,
        password: password.value,
    };

    if (email.value.length === 0 || password.value.length === 0){
        alert('Усі поля форми мають бути заповнені')
    } else {
        console.log(data);
        e.currentTarget.reset()
    };
}
