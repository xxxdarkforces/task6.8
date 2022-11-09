const buttonEvent = document.querySelector('button');
const inputForm = document.querySelector('form');
const inputText = document.querySelector('input');


buttonEvent.style.background = '#a8e4a0';

inputForm.style.borderRadius = '5px';

inputForm.addEventListener('submit', (event) => {
    event.preventDefault();
    duplicateField.textContent = inputText.value;
    inputText.value = '';
    console.log(event);
})

buttonEvent.addEventListener('click', (event) => {
    console.log(event);
})