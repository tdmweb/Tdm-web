document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Lógica del Menú Hamburguesa en Celular ---
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    // Seleccionamos los enlaces directamente o por clase nav-item
    const navItems = document.querySelectorAll('.nav-links a, .nav-item');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        navItems.forEach(item => {
            item.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // --- 2. Animación de los Contadores de Estadísticas ---
    const counters = document.querySelectorAll('.counter');
    const speed = 200;

    const animateCounters = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const inc = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 10);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const statsSection = document.getElementById('stats');
    if (statsSection) {
        observer.observe(statsSection);
    }

    // --- 3. Control del Carrusel de Planes (Dinámico) ---
    const planesGrid = document.getElementById('planes-grid');
    const btnPrev = document.getElementById('prev-plan');
    const btnNext = document.getElementById('next-plan');

    if (planesGrid && btnPrev && btnNext) {
        
        // Función para obtener el salto exacto según el tamaño actual de la tarjeta
        const getScrollStep = () => {
            const card = planesGrid.querySelector('.plan-card');
            // Ancho de la tarjeta + 24px de gap aproximadamente
            return card ? card.offsetWidth + 24 : 340; 
        };

        btnNext.addEventListener('click', () => {
            planesGrid.scrollBy({
                left: getScrollStep(),
                behavior: 'smooth'
            });
        });

        btnPrev.addEventListener('click', () => {
            planesGrid.scrollBy({
                left: -getScrollStep(),
                behavior: 'smooth'
            });
        });
    }

});
