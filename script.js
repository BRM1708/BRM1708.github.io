const girasol = document.querySelector('.girasol');

girasol.addEventListener('click', () => {
    girasol.style.transition = 'transform 0.5s';
    girasol.style.transform = 'rotate(360deg)';
    setTimeout(() => {
        girasol.style.transition = 'none';
        girasol.style.transform = 'rotate(0deg)';
    }, 500);
});
