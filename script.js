/**
 * BiTetto Interaction Script
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- Mobile Menu Toggle ---
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = mobileMenu.querySelectorAll('a');

    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden');
    };

    const closeMenu = () => {
        mobileMenu.classList.add('hidden');
    };

    mobileBtn.addEventListener('click', toggleMenu);

    // Close menu when a link is clicked
    mobileLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Close menu if clicked outside
    document.addEventListener('click', (e) => {
        if (!mobileBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
            closeMenu();
        }
    });


    // --- Navbar Scroll Effect ---
    const navbar = document.getElementById('navbar');
    
    const handleScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll);


    // --- Smooth Anchor Scrolling ---
    // (Note: CSS scroll-behavior: smooth is already in style.css, 
    // but this JS adds extra support and ensures offset for fixed header)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = 70;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Run once on load to set initial navbar state
    handleScroll();
});

function switchMap(type) {
            // Haritaları güncelle (Frame değişimi)
            const frames = document.querySelectorAll('.map-frame');
            frames.forEach(f => f.classList.remove('active'));
            document.getElementById('map-' + type).classList.add('active');

            // Bilgi bloklarını vurgula (Highlight değişimi)
            const blocks = document.querySelectorAll('.address-block');
            blocks.forEach(b => b.classList.remove('highlighted'));
            document.getElementById('block-' + type).classList.add('highlighted');
        }