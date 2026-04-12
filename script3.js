document.addEventListener('DOMContentLoaded', () => {
            
            // --- Mobil Menü Toggle ---
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

            mobileLinks.forEach(link => {
                link.addEventListener('click', closeMenu);
            });

            document.addEventListener('click', (e) => {
                if (!mobileBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
                    closeMenu();
                }
            });


            // --- Navbar Kaydırma Efekti ---
            const navbar = document.getElementById('navbar');
            
            const handleScroll = () => {
                if (window.scrollY > 30) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            };

            window.addEventListener('scroll', handleScroll);


            // --- Yumuşak Kaydırma (Smooth Scroll) ---
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    e.preventDefault();
                    const targetElement = document.querySelector(targetId);
                    
                    if (targetElement) {
                        const headerOffset = 90; // Yüzen menü için offset artırıldı
                        const elementPosition = targetElement.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        });
                    }
                });
            });

            handleScroll();
        });