const buttonEvent = document.querySelector('button');
const inputForm = document.querySelector('form');
const inputText = document.querySelector('input');
const hrshelf = document.querySelector('hr');


buttonEvent.style.background = '#a8e4a0';
buttonEvent.style.borderRadius = '5px';

inputText.style.borderRadius = '5px';

hrshelf.style.margin = '20px 0';
hrshelf.style.padding = '0';
hrshelf.style.height = '5px';
hrshelf.style.border = 'none';
hrshelf.style.background = 'linear-gradient(180deg, #a8e4a0, blue)';

inputForm.addEventListener('submit', (event) => {
    event.preventDefault();
    duplicateField.textContent = inputText.value;
    inputText.value = '';
    console.log(event);
})

buttonEvent.addEventListener('click', (event) => {
    console.log(event);
})