let counterValue = 0;
const counterEl = document.querySelector('#counter');
const counterTextEl = document.querySelector('#value')
const btnDown = counterEl.firstElementChild;
const btnUp = counterEl.lastElementChild;

function onBtnUpClick(){
    counterValue += 1;
    return counterTextEl.textContent = counterValue;
}

function onBtnDownClick(){
    counterValue -= 1;
    return counterTextEl.textContent = counterValue;
}

btnUp.addEventListener('click', onBtnUpClick)

btnDown.addEventListener('click',onBtnDownClick)



