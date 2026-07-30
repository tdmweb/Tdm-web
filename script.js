// --- Lógica del Menú Hamburguesa en Celular ---
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-item');

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

// --- Animación de los Contadores de Estadísticas ---
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
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            animateCounters();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statsSection = document.getElementById('stats');
if(statsSection) {
    observer.observe(statsSection);
}

// --- Control del Carrusel de Planes ---
const planesGrid = document.getElementById('planes-grid');
const btnPrev = document.getElementById('prev-plan');
const btnNext = document.getElementById('next-plan');

if (planesGrid && btnPrev && btnNext) {
    const scrollAmount = 340; 

    btnPrev.addEventListener('click', () => {
        planesGrid.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    btnNext.addEventListener('click', () => {
        planesGrid.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
}
