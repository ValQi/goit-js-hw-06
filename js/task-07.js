const inputChange = document.querySelector('input#font-size-control');
const inputText = document.querySelector('span#text');

inputChange.addEventListener('change', e => {
    inputText.style.fontSize = `${inputChange.value}px`
});