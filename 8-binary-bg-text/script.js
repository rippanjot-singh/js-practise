//VARIABLES
let input = document.querySelector('input');
let h1 = document.querySelector('h1');
//EVENT LISTNERS
input.addEventListener('input', () => {
    h1.innerText = input.value;
})