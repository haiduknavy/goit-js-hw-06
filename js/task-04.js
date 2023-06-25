let counterValue = 0;

const decrement = document.querySelector('button[data-action="decrement"]')
const increment = document.querySelector('button[data-action="increment"]')
const value = document.querySelector('#value')

decrement.addEventListener('click', onDecrement)

function onDecrement(){
    counterValue -= 1;
    value.textContent = counterValue;
}

increment.addEventListener('click', onIncrement)

function onIncrement(e){
    counterValue += 1;
    value.textContent = counterValue;
    console.log(e.currentTarget);
}