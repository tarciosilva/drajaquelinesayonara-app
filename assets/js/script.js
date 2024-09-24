 

const mode = document.querySelector('body');
const switcher = document.getElementById('flexSwitchCheckDefault');
const navbarBackGround = document.querySelector('[data-navbar]');

switcher.addEventListener('click', () => {
    const check = switcher.checked ? 'dark' : 'light';
    if (check === 'light') {
        navbarBackGround.classList.toggle('bg-light');
        navbarBackGround.classList.toggle('bg-dark');
    }else if (check === 'dark') {
        navbarBackGround.classList.toggle('bg-dark');
        navbarBackGround.classList.toggle('bg-light');
    }
    mode.setAttribute('data-bs-theme', check);
})
