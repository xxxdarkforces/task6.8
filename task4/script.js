const link = document.querySelector('a');

link.addEventListener('click', () => {
    const promptid = prompt('Введите новый текст ссылки');
    console.log(promptid);
    link.textContent = promptid;
})

