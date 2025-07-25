document.addEventListener('DOMContentLoaded', function() {
    const originalNav = document.querySelector('nav');
    if (!originalNav) return;
    
    const compactNav = document.createElement('div');
    compactNav.className = 'compact-nav';
    
    const navClone = originalNav.cloneNode(true);
    compactNav.appendChild(navClone);
    
    originalNav.parentNode.insertBefore(compactNav, originalNav);
    originalNav.classList.add('desktop-nav');
});
document.addEventListener('DOMContentLoaded', function() {
    const benefitCards = document.querySelectorAll('.benefit-card');
    benefitCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
    
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.about-section, .benefits, .contact-form');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
});
document.addEventListener('DOMContentLoaded', function() {

    function toggleTheme() {
        document.body.classList.toggle('dark-theme');
        const isDark = document.body.classList.contains('dark-theme');
        localStorage.setItem('darkTheme', isDark);
        
        const themeBtn = document.querySelector('.theme-toggle');
        themeBtn.textContent = isDark ? '☀️' : '🌙';
    }

    if (localStorage.getItem('darkTheme') === 'true') {
        document.body.classList.add('dark-theme');
    }

    const themeBtn = document.createElement('button');
    themeBtn.className = 'theme-toggle';
    themeBtn.textContent = localStorage.getItem('darkTheme') === 'true' ? '☀️' : '🌙';
    themeBtn.onclick = toggleTheme;
    document.body.appendChild(themeBtn);
});
document.addEventListener('DOMContentLoaded', function() {
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
        const menuToggle = document.createElement('button');
        menuToggle.className = 'menu-toggle';
        menuToggle.setAttribute('aria-label', 'Открыть меню');
        menuToggle.innerHTML = '<span></span><span></span><span></span>';
        
        const mobileMenu = document.createElement('nav');
        mobileMenu.className = 'mobile-menu';
        mobileMenu.setAttribute('aria-hidden', 'true');
        
        const mainNav = document.querySelector('nav.desktop-nav ul');
        if (mainNav) {
            mobileMenu.innerHTML = mainNav.outerHTML;
        } else {
            mobileMenu.innerHTML = `
                <ul>
                    <li><a href="index.html">Главная</a></li>
                    <li><a href="about_teufel.html">О нас</a></li>
                    <li><a href="rules_teufel.html">Правила</a></li>
                    <li><a href="complaints_teufel.html">Жалобы</a></li>
                    <li><a href="hall-of-shame_teufel.html">Доска позорников</a></li>
                    <li><a href="celebrities_teufel.html">Знаменитости</a></li>
                    <li><a href="links_teufel.html">Ссылки</a></li>
                    <li><a href="contacts_teufel.html">Контакты</a></li>
                    <li><a href="https://vk.com/fabelhafter_teufel" class="cta-button">Подписаться</a></li>
                </ul>
            `;
        }
        
        const menuOverlay = document.createElement('div');
        menuOverlay.className = 'menu-overlay';
        menuOverlay.setAttribute('tabindex', '-1');
        
        document.body.appendChild(menuToggle);
        document.body.appendChild(mobileMenu);
        document.body.appendChild(menuOverlay);
        
        const toggleMenu = (state) => {
            const isOpening = state === undefined ? !menuToggle.classList.contains('active') : state;
            
            menuToggle.classList.toggle('active', isOpening);
            mobileMenu.classList.toggle('active', isOpening);
            menuOverlay.classList.toggle('active', isOpening);
            mobileMenu.setAttribute('aria-hidden', String(!isOpening));
            
            if (isOpening) {
                menuToggle.setAttribute('aria-expanded', 'true');
                document.body.style.overflow = 'hidden';
            } else {
                menuToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        };
        
        menuToggle.addEventListener('click', () => toggleMenu());
        menuOverlay.addEventListener('click', () => toggleMenu(false));
        
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    toggleMenu(false);
                }
            });
        });
        
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                toggleMenu(false);
            }
        });
    }
});
