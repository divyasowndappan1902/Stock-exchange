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

    // Redirect dummy buttons and links to 404 page
    const dummyButtons = document.querySelectorAll('button:not([type="submit"]):not([onclick]):not(.mobile-menu-toggle)');
    dummyButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = '404.html';
        });
    });

    const dummyLinks = document.querySelectorAll('a[href="#"]:not(.sidebar-link)');
    dummyLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = '404.html';
        });
    });
});
