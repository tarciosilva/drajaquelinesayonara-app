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


function animateTitle() {
    const title = document.title; // Obtém o título atual
    let index = 0;

    // Crie um intervalo para alterar o título a cada 500 milissegundos
    setInterval(() => {
        index = (index + 1) % title.length;
        const animatedTitle = title.slice(index) + title.slice(0, index);
        document.title = animatedTitle;
    }, 300);
}

// Chame a função para iniciar a animação
animateTitle();