document.addEventListener('DOMContentLoaded', () => {
    // Landing pages mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const headerNav = document.querySelector('header nav');
    
    if (mobileMenuToggle && headerNav) {
        mobileMenuToggle.addEventListener('click', () => {
            headerNav.classList.toggle('active');
        });
        
        // Optional: close menu if clicking outside
        document.addEventListener('click', (e) => {
            if (!headerNav.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                headerNav.classList.remove('active');
            }
        });
        
        // Close menu on link click
        headerNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                headerNav.classList.remove('active');
            });
        });
    }
});
