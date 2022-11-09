const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => {
    alert('Служит для вывода информации в консоль');
})

const alertid = document.querySelector('#alert');

alertid.addEventListener('click', () => {
    alert('Показывает диалоговое окно с сообщением и кнопкой OK');
})

const promptid = document.querySelector('#prompt');

promptid.addEventListener('click', () => {
    const promptid = prompt('Отображает диалоговое окно с запросом на ввод текста');
    console.log(promptid);
})

