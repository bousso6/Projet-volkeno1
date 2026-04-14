// MODAL
const modalBtn = document.querySelector('.modal-btn');
const overlay = document.querySelector('.modal-overlay');
const closeModal = document.querySelector('.close-modal');

if (modalBtn && overlay && closeModal) {
    modalBtn.addEventListener('click', () => {
        overlay.classList.remove('hidden');
    });
    closeModal.addEventListener('click', () => {
        overlay.classList.add('hidden');
    });
}

// MENU TOGGLE
document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('menu-label');
    const slide = document.querySelector('.slide');

    if (toggle && slide) {
        toggle.addEventListener('click', () => {
            if (slide.style.display === 'block') {
                slide.style.display = 'none';
            } else {
                slide.style.display = 'block';
            }
        });

        document.addEventListener('click', (e) => {
            if (!slide.contains(e.target) && !toggle.contains(e.target)) {
                slide.style.display = 'none';
            }
        });
    }
});