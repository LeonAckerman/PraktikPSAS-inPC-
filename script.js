function showSection(sectionId) {
    // Ambil semua section
    const sections = document.querySelectorAll('section');

    // Sembunyikan semua section
    sections.forEach((section) => {
        section.classList.remove('active');
    });

    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
}

function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.remove('active');
        if (section.id === sectionId) {
            section.classList.add('active');
        }
    });
}

const animateElements = document.querySelectorAll('[data-animate]');
window.addEventListener('scroll', () => {
    animateElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            el.classList.add('visible');
        }
    });
});

window.addEventListener('DOMContentLoaded', () => {
    animateElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            el.classList.add('visible');
        }
    });
});
