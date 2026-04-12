document.addEventListener('DOMContentLoaded', () => {
            
            // --- Mobile Menu Toggle ---
            const mobileBtn = document.getElementById('mobile-menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');
            const mobileLinks = mobileMenu.querySelectorAll('a');

            mobileBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('active');
            });

            mobileLinks.forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.remove('active');
                });
            });

            // Close menu if clicked outside
            document.addEventListener('click', (e) => {
                if (!mobileBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
                    mobileMenu.classList.remove('active');
                }
            });

            // --- Navbar Scroll Effect ---
            const navbar = document.getElementById('navbar');
            
            const handleScroll = () => {
                if (window.scrollY > 30) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            };

            window.addEventListener('scroll', handleScroll);
            handleScroll(); // Init

            // --- Smooth Anchor Scrolling ---
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
        });