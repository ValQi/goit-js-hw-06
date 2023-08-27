const inputChange = document.querySelector('input#font-size-control');
const inputText = document.querySelector('span#text');

inputChange.addEventListener('change', e => {
    inputText.style.fontSize = `${e.target.value }px`
});