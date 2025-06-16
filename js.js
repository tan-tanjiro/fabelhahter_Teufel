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
    // Функция переключения темы
    function toggleTheme() {
        document.body.classList.toggle('dark-theme');
        const isDark = document.body.classList.contains('dark-theme');
        localStorage.setItem('darkTheme', isDark);
        
        // Обновляем иконку кнопки
        const themeBtn = document.querySelector('.theme-toggle');
        themeBtn.textContent = isDark ? '☀️' : '🌙';
    }

    // Проверка сохраненной темы
    if (localStorage.getItem('darkTheme') === 'true') {
        document.body.classList.add('dark-theme');
    }

    // Инициализация кнопки
    const themeBtn = document.createElement('button');
    themeBtn.className = 'theme-toggle';
    themeBtn.textContent = localStorage.getItem('darkTheme') === 'true' ? '☀️' : '🌙';
    themeBtn.onclick = toggleTheme;
    document.body.appendChild(themeBtn);
});
