const consoleLog = document.querySelector('#consoleLog');
const alertid = document.querySelector('#alert');
const promptid = document.querySelector('#prompt');
const codeForm = document.querySelectorAll('code');

const code1 = codeForm[0];
const code2 = codeForm[1];
const code3 = codeForm[2];

code1.style.margin = '25px';
code1.style.padding = '12px 12px 12px 40px';
code1.style.color = '#333';
code1.style.background = '#D3D3D3';
code1.style.borderRadius = '5px';
code1.style.border = '2px solid #3d98e3';
code1.style.display = 'block';
code1.style.width = '500px';

code2.style.margin = '25px';
code2.style.padding = '12px 12px 12px 40px';
code2.style.color = '#333';
code2.style.background = '#D3D3D3';
code2.style.borderRadius = '5px';
code2.style.border = '2px solid #FF7F50';
code2.style.display = 'block';
code2.style.width = '500px';

code3.style.margin = '25px';
code3.style.padding = '12px 12px 12px 40px';
code3.style.color = '#333';
code3.style.background = '#D3D3D3';
code3.style.borderRadius = '5px';
code3.style.border = '2px solid #2E8B57';
code3.style.display = 'block';
code3.style.width = '500px';

consoleLog.style.fontSize = '20px';
alertid.style.fontSize = '20px';
promptid.style.fontSize = '20px';

consoleLog.addEventListener('click', () => {
    alert('Служит для вывода информации в консоль');
})

alertid.addEventListener('click', () => {
    alert('Показывает диалоговое окно с сообщением и кнопкой OK');
})

promptid.addEventListener('click', () => {
    const promptid = prompt('Отображает диалоговое окно с запросом на ввод текста');
    console.log(promptid);
})

