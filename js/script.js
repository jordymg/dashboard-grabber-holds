// Dashboard Grabber Holds - JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const backToTopBtn = document.getElementById('backToTop');
    const modals = document.querySelectorAll('.modal');
    const modalBtns = document.querySelectorAll('.btn-modal');
    const closeBtns = document.querySelectorAll('.close');
    const contactForm = document.querySelector('.contact-form');

    // Funcionalidad del menú hamburguesa
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        
        // Animación del hamburger
        hamburger.classList.toggle('active');
    });

    // Cerrar menú al hacer click en un enlace (mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Smooth scroll para enlaces de navegación
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Altura del navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Indicador de sección activa en el menú
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section');
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const correspondingLink = document.querySelector(`a[href="#${sectionId}"]`);

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (correspondingLink) {
                    correspondingLink.classList.add('active');
                }
            }
        });
    }

    // Efecto sticky del navbar y mostrar/ocultar botón volver arriba
    function handleScroll() {
        const scrollY = window.scrollY;
        
        // Navbar sticky effect
        if (scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }

        // Mostrar/ocultar botón volver arriba
        if (scrollY > 500) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }

        // Actualizar enlace activo
        updateActiveNavLink();
    }

    // Event listeners para scroll
    window.addEventListener('scroll', handleScroll);

    // Funcionalidad del botón volver arriba
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Funcionalidad de modales
    modalBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const modalId = this.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden'; // Prevenir scroll del body
            }
        });
    });

    // Cerrar modales
    function closeModal(modal) {
        modal.style.display = 'none';
        document.body.style.overflow = ''; // Restaurar scroll del body
    }

    closeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const modal = this.closest('.modal');
            closeModal(modal);
        });
    });

    // Cerrar modal al hacer click fuera del contenido
    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal(modal);
            }
        });
    });

    // Cerrar modal con tecla Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            modals.forEach(modal => {
                if (modal.style.display === 'block') {
                    closeModal(modal);
                }
            });
        }
    });

    // Validación y envío del formulario de contacto
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const name = formData.get('name').trim();
            const email = formData.get('email').trim();
            const message = formData.get('message').trim();
            
            // Validación básica
            if (!name || !email || !message) {
                showNotification('Por favor, completa todos los campos.', 'error');
                return;
            }
            
            // Validación de email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showNotification('Por favor, ingresa un email válido.', 'error');
                return;
            }
            
            // Simular envío del formulario
            const submitBtn = this.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Enviando...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                showNotification('¡Mensaje enviado correctamente! Nos pondremos en contacto contigo pronto.', 'success');
                this.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }

    // Sistema de notificaciones
    function showNotification(message, type = 'info') {
        // Crear elemento de notificación
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        // Estilos de la notificación
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 20px;
            border-radius: 5px;
            color: white;
            font-weight: 500;
            z-index: 3000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 300px;
            word-wrap: break-word;
        `;
        
        // Colores según el tipo
        switch(type) {
            case 'success':
                notification.style.background = '#27ae60';
                break;
            case 'error':
                notification.style.background = '#e74c3c';
                break;
            case 'warning':
                notification.style.background = '#f39c12';
                break;
            default:
                notification.style.background = '#3498db';
        }
        
        document.body.appendChild(notification);
        
        // Animación de entrada
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remover después de 4 segundos
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 4000);
    }

    // Animaciones al hacer scroll (Intersection Observer)
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Elementos a animar
        const animatedElements = document.querySelectorAll('.inventory-card, .financial-card, .product-card');
        
        animatedElements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(element);
        });
    }

    // Inicializar animaciones
    initScrollAnimations();

    // Optimización: Throttle para el evento scroll
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }

    // Aplicar throttle al scroll
    window.addEventListener('scroll', throttle(handleScroll, 16)); // ~60fps

    // Precargar imágenes críticas
    function preloadImages() {
        const criticalImages = [
            'assets/logo-Grabber-violeta.jpg',
            'assets/hero-image.jpg'
        ];

        criticalImages.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }

    preloadImages();

    // Analytics básico (para futuras implementaciones)
    function trackEvent(eventName, eventData = {}) {
        console.log('Event tracked:', eventName, eventData);
        // Aquí se podría integrar con Google Analytics, etc.
    }

    // Trackear clicks en botones importantes
    document.querySelectorAll('.cta-button, .btn-modal, .submit-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            trackEvent('button_click', {
                button_text: this.textContent.trim(),
                button_class: this.className
            });
        });
    });

    // Detectar si el usuario está usando un dispositivo táctil
    function isTouchDevice() {
        return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    }

    // Ajustes específicos para dispositivos táctiles
    if (isTouchDevice()) {
        document.body.classList.add('touch-device');
        
        // Remover efectos hover en dispositivos táctiles
        const style = document.createElement('style');
        style.textContent = `
            .touch-device .inventory-card:hover,
            .touch-device .product-card:hover {
                transform: none;
            }
        `;
        document.head.appendChild(style);
    }

    // Manejo de errores globales
    window.addEventListener('error', function(e) {
        console.error('Error capturado:', e.error);
        // En producción, aquí se podría enviar el error a un servicio de logging
    });

    // Función de inicialización completa
    function init() {
        console.log('Dashboard Grabber Holds inicializado correctamente');
        
        // Verificar que todos los elementos críticos estén presentes
        const criticalElements = ['#navbar', '#hero', '#backToTop'];
        const missingElements = criticalElements.filter(selector => !document.querySelector(selector));
        
        if (missingElements.length > 0) {
            console.warn('Elementos faltantes:', missingElements);
        }
        
        // Actualizar indicador activo al cargar la página
        updateActiveNavLink();
    }

    // Inicializar la aplicación
    init();
});

// Función para actualizar métricas dinámicamente (ejemplo)
function updateMetrics(newData) {
    const metrics = document.querySelectorAll('.metric');
    
    if (newData && metrics.length > 0) {
        metrics.forEach((metric, index) => {
            if (newData[index]) {
                // Animación de contador
                animateCounter(metric, parseInt(metric.textContent.replace(/\D/g, '')), newData[index]);
            }
        });
    }
}

// Animación de contador para métricas
function animateCounter(element, start, end, duration = 2000) {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
            current = end;
            clearInterval(timer);
        }
        
        // Formatear número con comas para miles
        const formattedNumber = Math.floor(current).toLocaleString();
        element.textContent = element.textContent.includes('$') ? `$${formattedNumber}` : formattedNumber;
    }, 16);
}

// Exportar funciones útiles para uso externo
window.GrabberDashboard = {
    updateMetrics,
    animateCounter,
    showNotification: function(message, type) {
        // Esta función estará disponible globalmente después de que el DOM esté listo
        document.addEventListener('DOMContentLoaded', function() {
            showNotification(message, type);
        });
    }
};