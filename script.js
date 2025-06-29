// Function to update the date in Arabic
function updateArabicDate() {
    const dateElement = document.querySelector('.header-date');
    if (dateElement) {
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };
        const today = new Date();
        const arabicDate = today.toLocaleDateString('ar-SY', options);
        dateElement.textContent = arabicDate;
    }
}

// Function to set up the mobile navigation toggle
function setupMobileNav() {
    const navContainer = document.querySelector('.nav-container');
    const navList = document.querySelector('.nav-list');
    
    if (navContainer && navList) {
        const navToggle = document.createElement('button');
        navToggle.className = 'nav-toggle';
        navToggle.innerHTML = '&#9776; القائمة'; // Hamburger icon
        navToggle.setAttribute('aria-label', 'Toggle navigation');
        navToggle.setAttribute('aria-expanded', 'false');

        navContainer.prepend(navToggle);

        navToggle.addEventListener('click', () => {
            const isVisible = navList.classList.toggle('show');
            navToggle.setAttribute('aria-expanded', isVisible);
        });
    }
}

// Initialize all scripts on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    updateArabicDate();
    setupMobileNav();
});