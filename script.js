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

const animateCounters = () => {
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const duration = 1500; // Duración total en milisegundos (1.5 segundos)
        const stepTime = 30;   // Intervalo de actualización en ms
        const totalSteps = duration / stepTime;
        const inc = target / totalSteps;
        let count = 0;

        const updateCount = setInterval(() => {
            count += inc;
            if (count >= target) {
                counter.innerText = target;
                clearInterval(updateCount);
            } else {
                counter.innerText = Math.floor(count);
            }
        }, stepTime);
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

// Funcionalidad de desplazamiento para el carrusel de proyectos
document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('carouselTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (track && prevBtn && nextBtn) {
        nextBtn.addEventListener('click', () => {
            const cardWidth = track.querySelector('.proyecto-card').offsetWidth + 25;
            track.scrollBy({ left: cardWidth, behavior: 'smooth' });
        });

        prevBtn.addEventListener('click', () => {
            const cardWidth = track.querySelector('.proyecto-card').offsetWidth + 25;
            track.scrollBy({ left: -cardWidth, behavior: 'smooth' });
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    // 1. BASE DE DATOS DE PASARELAS Y PLANES
    const datosApp = {
        "planes": {
            "Inicial": 0,
            "Esencial": 0.02,
            "Impulso": 0.01,
            "Escala": 0.007
        },
        "costosPasarelas": [
            { "pasarela": "Pago Nube", "medio": "Tarjeta de Crédito - Tarjeta de Débito", "plazo": "1 día", "porcentaje": 6.09, "tieneIva": true },
            { "pasarela": "Pago Nube", "medio": "Tarjeta de Crédito - Tarjeta de Débito", "plazo": "7 días", "porcentaje": 4.39, "tieneIva": true },
            { "pasarela": "Pago Nube", "medio": "Tarjeta de Crédito - Tarjeta de Débito", "plazo": "14 días", "porcentaje": 3.49, "tieneIva": true },
            { "pasarela": "Pago Nube", "medio": "Transferencia", "plazo": "1 día", "porcentaje": 1.5, "tieneIva": true },
            { "pasarela": "Mercado Pago", "medio": "Tarjeta de Crédito", "plazo": "Inmediato", "porcentaje": 6.29, "tieneIva": true },
            { "pasarela": "Mercado Pago", "medio": "Tarjeta de Crédito", "plazo": "10 días", "porcentaje": 4.39, "tieneIva": true },
            { "pasarela": "Mercado Pago", "medio": "Tarjeta de Crédito", "plazo": "18 días", "porcentaje": 3.39, "tieneIva": true },
            { "pasarela": "Mercado Pago", "medio": "Tarjeta de Crédito", "plazo": "35 días", "porcentaje": 1.49, "tieneIva": true },
            { "pasarela": "Mercado Pago", "medio": "Tarjeta de Débito", "plazo": "Inmediato", "porcentaje": 6.29, "tieneIva": true },
            { "pasarela": "Mercado Pago", "medio": "Tarjeta de Débito", "plazo": "10 días", "porcentaje": 4.39, "tieneIva": true },
            { "pasarela": "Mercado Pago", "medio": "Tarjeta de Débito", "plazo": "18 días", "porcentaje": 3.39, "tieneIva": true },
            { "pasarela": "Mercado Pago", "medio": "Tarjeta de Débito", "plazo": "35 días", "porcentaje": 1.49, "tieneIva": true },
            { "pasarela": "Mercado Pago", "medio": "Billetera Virtual", "plazo": "Inmediato", "porcentaje": 6.29, "tieneIva": true },
            { "pasarela": "Mercado Pago", "medio": "Billetera Virtual", "plazo": "10 días", "porcentaje": 4.39, "tieneIva": true },
            { "pasarela": "Mercado Pago", "medio": "Billetera Virtual", "plazo": "18 días", "porcentaje": 3.39, "tieneIva": true },
            { "pasarela": "Mercado Pago", "medio": "Billetera Virtual", "plazo": "35 días", "porcentaje": 1.49, "tieneIva": true },
            { "pasarela": "Mercado Pago", "medio": "Redes de pago en efectivo", "plazo": "Inmediato", "porcentaje": 6.29, "tieneIva": true },
            { "pasarela": "Mercado Pago", "medio": "Redes de pago en efectivo", "plazo": "10 días", "porcentaje": 4.39, "tieneIva": true },
            { "pasarela": "Mercado Pago", "medio": "Redes de pago en efectivo", "plazo": "18 días", "porcentaje": 3.39, "tieneIva": true },
            { "pasarela": "Mercado Pago", "medio": "Redes de pago en efectivo", "plazo": "35 días", "porcentaje": 1.49, "tieneIva": true },
            { "pasarela": "Openpay", "medio": "Tarjeta de Crédito", "plazo": "Inmediato", "porcentaje": 6.19, "tieneIva": true },
            { "pasarela": "Openpay", "medio": "Tarjeta de Crédito", "plazo": "2 días", "porcentaje": 5.49, "tieneIva": true },
            { "pasarela": "Openpay", "medio": "Tarjeta de Crédito", "plazo": "10 días", "porcentaje": 2.99, "tieneIva": true },
            { "pasarela": "Openpay", "medio": "Tarjeta de Crédito", "plazo": "30 días", "porcentaje": 0, "tieneIva": true },
            { "pasarela": "Openpay", "medio": "Tarjeta de Débito", "plazo": "Inmediato", "porcentaje": 3.19, "tieneIva": true },
            { "pasarela": "Openpay", "medio": "Tarjeta de Débito", "plazo": "2 días", "porcentaje": 2.99, "tieneIva": true },
            { "pasarela": "NAVE", "medio": "Tarjeta de Crédito", "plazo": "Inmediato", "porcentaje": 4.5, "tieneIva": true },
            { "pasarela": "NAVE", "medio": "Tarjeta de Crédito", "plazo": "8 días", "porcentaje": 1.8, "tieneIva": true },
            { "pasarela": "NAVE", "medio": "Tarjeta de Débito", "plazo": "Inmediato", "porcentaje": 1.2, "tieneIva": true },
            { "pasarela": "NAVE", "medio": "Billetera Virtual", "plazo": "Inmediato", "porcentaje": 0.8, "tieneIva": true },
            { "pasarela": "MODO", "medio": "Tarjeta de Crédito", "plazo": "1 día", "porcentaje": 7.11, "tieneIva": true },
            { "pasarela": "MODO", "medio": "Tarjeta de Crédito", "plazo": "8 días", "porcentaje": 2.8, "tieneIva": true },
            { "pasarela": "MODO", "medio": "Tarjeta de Débito", "plazo": "1 día", "porcentaje": 1.8, "tieneIva": true },
            { "pasarela": "Ualá", "medio": "Tarjeta de Crédito - Tarjeta de Débito", "plazo": "Inmediato", "porcentaje": 4.9, "tieneIva": true },
            { "pasarela": "GOcuotas", "medio": "Tarjeta de Débito", "plazo": "22 días", "porcentaje": 9.1, "tieneIva": true },
            { "pasarela": "Personalizado", "medio": "Transferencia - Efectivo", "plazo": "Inmediato", "porcentaje": 0, "tieneIva": false }
        ]
    };

    // 2. ELEMENTOS Y ESTADO
    let modoActual = 'recibir';

    const selPlan = document.getElementById('select-plan');
    const selPasarela = document.getElementById('select-pasarela');
    const selMedio = document.getElementById('select-medio');
    const selPlazo = document.getElementById('select-plazo');
    const inputMonto = document.getElementById('input-monto');

    const btnRecibir = document.getElementById('btn-recibir');
    const btnCobrar = document.getElementById('btn-cobrar');
    const labelMonto = document.getElementById('label-monto');
    const labelBox1 = document.getElementById('label-box-1');
    const montoBox1 = document.getElementById('monto-box-1');
    const labelBox2 = document.getElementById('label-box-2');
    const montoBox2 = document.getElementById('monto-box-2');

    const resComisionTN = document.getElementById('res-comision-tn');
    const resComisionPasarela = document.getElementById('res-comision-pasarela');

    // Evita errores si el script carga en páginas donde no está la calculadora
    if (!selPlan || !selPasarela) return;

    // 3. CARGA DE SELECTS DINÁMICOS
    function initSelects() {
        selPlan.innerHTML = "";
        Object.keys(datosApp.planes).forEach(p => {
            const pct = (datosApp.planes[p] * 100).toFixed(1);
            selPlan.innerHTML += `<option value="${datosApp.planes[p]}">${p} (${pct}%)</option>`;
        });

        const pasUnicas = [...new Set(datosApp.costosPasarelas.map(c => c.pasarela))];
        selPasarela.innerHTML = "";
        pasUnicas.forEach(p => {
            selPasarela.innerHTML += `<option value="${p}">${p}</option>`;
        });

        actualizarMedios();
    }

    function actualizarMedios() {
        const pas = selPasarela.value;
        const medUnicos = [...new Set(datosApp.costosPasarelas.filter(c => c.pasarela === pas).map(m => m.medio))];
        selMedio.innerHTML = "";
        medUnicos.forEach(m => selMedio.innerHTML += `<option value="${m}">${m}</option>`);
        actualizarPlazos();
    }

    function actualizarPlazos() {
        const pas = selPasarela.value;
        const med = selMedio.value;
        const plazos = datosApp.costosPasarelas.filter(c => c.pasarela === pas && c.medio === med);
        selPlazo.innerHTML = "";
        plazos.forEach(p => {
            selPlazo.innerHTML += `<option value="${p.porcentaje}" data-iva="${p.tieneIva}">${p.plazo} (${p.porcentaje}%)</option>`;
        });
        calcular();
    }

    // 4. CAMBIO DE MODO (RECIBIR / COBRAR)
    function setModo(m) {
        modoActual = m;
        btnRecibir.classList.toggle('active', m === 'recibir');
        btnCobrar.classList.toggle('active', m === 'cobrar');
        
        labelMonto.innerText = m === 'recibir' ? "¿Cuánto querés recibir limpio? ($)" : "¿A cuánto vas a vender? ($)";
        labelBox1.innerText = m === 'recibir' ? "PARA RECIBIR" : "RECIBÍS";
        labelBox2.innerText = m === 'recibir' ? "DEBERÍAS COBRAR" : "SI COBRÁS";
        
        calcular();
    }

    // 5. CÁLCULO
    function calcular() {
        const monto = parseFloat(inputMonto.value) || 0;
        let cTN = parseFloat(selPlan.value);
        
        const optP = selPlazo;
        if (!optP.options[optP.selectedIndex]) return;

        const cPasB = parseFloat(optP.value) / 100;
        const tIva = optP.options[optP.selectedIndex].getAttribute('data-iva') === "true";

        if (selPasarela.value === "Pago Nube") cTN = 0;
        
        const cPasF = tIva ? (cPasB * 1.21) : cPasB;

        let pV, gan;
        if (modoActual === 'recibir') {
            pV = monto / (1 - cTN - cPasF);
            gan = monto;
        } else {
            pV = monto;
            gan = monto * (1 - cTN - cPasF);
        }

        if (gan < 0 || !isFinite(gan)) gan = 0;
        if (pV < 0 || !isFinite(pV)) pV = 0;

        montoBox1.innerText = "$ " + gan.toLocaleString('es-AR', {minimumFractionDigits: 2, maximumFractionDigits: 2});
        montoBox2.innerText = "$ " + pV.toLocaleString('es-AR', {minimumFractionDigits: 2, maximumFractionDigits: 2});

        if (pV > 0 && isFinite(pV)) {
            resComisionTN.innerText = "$ " + (pV * cTN).toLocaleString('es-AR', {minimumFractionDigits: 2, maximumFractionDigits: 2});
            resComisionPasarela.innerText = "$ " + (pV * cPasF).toLocaleString('es-AR', {minimumFractionDigits: 2, maximumFractionDigits: 2});
        } else {
            resComisionTN.innerText = "$ 0,00";
            resComisionPasarela.innerText = "$ 0,00";
        }
    }

    // 6. EVENTOS
    btnRecibir.addEventListener("click", () => setModo('recibir'));
    btnCobrar.addEventListener("click", () => setModo('cobrar'));
    selPasarela.addEventListener('change', actualizarMedios);
    selMedio.addEventListener('change', actualizarPlazos);
    selPlazo.addEventListener('change', calcular);
    selPlan.addEventListener('change', calcular);
    inputMonto.addEventListener('input', calcular);

    // Inicializar
    initSelects();
});