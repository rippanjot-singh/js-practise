let form = document.querySelector('form');
let section = document.querySelector('section');
let input = document.querySelectorAll('input');

form.addEventListener("submit", function (val){
    val.preventDefault();
    if (input[0].value == '' || input[1].value == '' || input[2].value == '' || input[3].value == '') return;
    section.innerHTML += `<div class="card">
                <div class="pfp"><img src="${input[0].value}" alt=""></div>
                <div class="name">
                    <h1>${input[1].value}</h1>
                </div>
                <div class="age">${input[2].value} y/o</div>
                <div class="role">${input[3].value}</div>
            </div>`
})

