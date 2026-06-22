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
    const dummyButtons = document.querySelectorAll(
        'button:not([onclick]):not(.mobile-menu-toggle)'
    );
    dummyButtons.forEach(btn => {
        // Skip explicit submit buttons
        if (btn.getAttribute('type') === 'submit') return;
        // Skip implicit submit buttons inside forms
        if (btn.closest('form') && btn.getAttribute('type') !== 'button') return;
        
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

    // FAQ Accordion Toggle
    const faqHeaders = document.querySelectorAll('h3[style*="cursor: pointer"]');
    faqHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const answer = header.nextElementSibling;
            const icon = header.querySelector('span');
            
            if (answer && answer.tagName.toLowerCase() === 'p') {
                if (answer.style.display === 'none') {
                    // Open
                    answer.style.display = 'block';
                    if (icon) icon.textContent = '-';
                } else {
                    // Close
                    answer.style.display = 'none';
                    if (icon) icon.textContent = '+';
                }
            }
        });
    });

    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            window.location.href = '404.html';
        });
    }
});

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});
