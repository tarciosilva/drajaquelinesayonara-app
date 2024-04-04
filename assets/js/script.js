const mode = document.querySelector('body');
const switcher = document.getElementById('flexSwitchCheckDefault');

switcher.addEventListener('click', () => {
    const check = switcher.checked ? 'dark' : 'light';
    mode.setAttribute('data-bs-theme', check);
})