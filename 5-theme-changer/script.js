let btn = document.querySelector('#themeToggle');
let body = document.querySelector('body');


let themes = window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (val) {
    if (val.matches) {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
    }
    else{
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
    }
})


btn.addEventListener('click', () => {
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
    }
});


if (localStorage.getItem('theme') == 'dark') {
    document.body.classList.add('dark-theme');
    document.body.classList.remove('light-theme');
}
else{
    document.body.classList.add('light-theme');
    document.body.classList.remove('dark-theme');
}