// Efectos de animación para las secciones al hacer scroll
const sections = document.querySelectorAll('section');

const showSection = () => {
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            section.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', showSection);
showSection(); // Mostrar al cargar la página
