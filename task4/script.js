const link = document.querySelector('a');
const btn = document.querySelector('button');

link.style.fontSize = '25px';
link.style.color = '#000080';
link.style.textShadow = '#696969 1px 0 10px';
link.style.textDecoration = 'none';

link.addEventListener('click', (event) => {
    event.preventDefault();
    const promptid = prompt('Введите новый текст ссылки');
    console.log(promptid);
    link.textContent = promptid;
    console.log(event);
})

