/**
 * Spirit Tarot Healer - Main JavaScript
 * Deep Night Temple Theme
 */

// ===================================
// Configuration
// ===================================

const TAILWIND_CONFIG = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#FFB300", // Luminous Glowing Amber/Brass
                "primary-dark": "#D97706", // Deep Polished Brass
                vermillion: "#FF0000", // Vivid Blood Red
                ochre: "#FBBF24", // Vibrant Turmeric
                terracotta: "#4B0000", // Deep Blood-Red Secondary
                night: "#1A0F0A", // Almost Black-Brown (Ancient Stone)
                "deep-maroon": "#2D0A05", // Deep Night Shadow
                parchment: "#FEF08A", // Luminous Brighter Turmeric
                "parchment-dark": "#FACC15", // Intense Turmeric
            },
            fontFamily: {
                display: ["'Eczar'", "serif"],
                decorative: ["'Cinzel'", "serif"],
                body: ["'Crimson Text'", "serif"],
                script: ["'Great Vibes'", "cursive"],
            },
            backgroundImage: {
                'mandala-pattern': "url('https://www.transparenttextures.com/patterns/black-scales.png')",
                'paper-texture': "url('https://www.transparenttextures.com/patterns/cream-paper.png')",
                'watercolor-wash': "url('https://www.transparenttextures.com/patterns/watercolor.png')",
                'brass-gradient': "linear-gradient(135deg, #FFB300 0%, #D97706 50%, #FFB300 100%)",
            },
            boxShadow: {
                'brass-glow': '0 0 20px rgba(255, 179, 0, 0.6)',
                'red-glow': '0 0 20px rgba(255, 0, 0, 0.4)',
                'gem-glow': 'inset 0 0 8px rgba(255,255,255,0.6), 0 2px 10px rgba(0,0,0,0.8)',
            }
        },
    },
};

// ===================================
// Smooth Scroll Navigation
// ===================================

class SmoothScrollNav {
    constructor() {
        this.init();
    }

    init() {
        // Smooth scroll for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href');
                if (href === '#') return;

                e.preventDefault();
                const target = document.querySelector(href);

                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });

                    // Update URL without jumping
                    history.pushState(null, null, href);
                }
            });
        });

        // Highlight active section in navigation
        this.setupScrollSpy();
    }

    setupScrollSpy() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('nav a[href^="#"]');

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.3
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    navLinks.forEach(link => {
                        link.classList.remove('text-primary');
                        link.classList.add('text-parchment/60');
                        if (link.getAttribute('href') === `#${id}`) {
                            link.classList.add('text-primary');
                            link.classList.remove('text-parchment/60');
                        }
                    });
                }
            });
        }, observerOptions);

        sections.forEach(section => observer.observe(section));
    }
}

// ===================================
// Mobile Menu Toggle
// ===================================

class MobileMenu {
    constructor() {
        this.openButton = document.getElementById('open-mobile-menu');
        this.closeButton = document.getElementById('close-mobile-menu');
        this.mobileMenu = document.getElementById('mobile-menu');
        this.menuLinks = this.mobileMenu ? this.mobileMenu.querySelectorAll('a') : [];
        this.isOpen = false;
        this.init();
    }

    init() {
        if (!this.openButton || !this.mobileMenu || !this.closeButton) return;

        // Open menu
        this.openButton.addEventListener('click', () => this.open());

        // Close menu
        this.closeButton.addEventListener('click', () => this.close());

        // Close menu when clicking a link
        this.menuLinks.forEach(link => {
            link.addEventListener('click', () => this.close());
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (this.isOpen && !e.target.closest('#mobile-menu') && !e.target.closest('#open-mobile-menu')) {
                this.close();
            }
        });

        // Close menu on window resize
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 768 && this.isOpen) {
                this.close();
            }
        });

        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen) {
                this.close();
            }
        });
    }

    open() {
        this.isOpen = true;
        this.mobileMenu.classList.remove('translate-x-full');
        this.mobileMenu.classList.add('translate-x-0');
        document.body.style.overflow = 'hidden';
        this.closeButton.focus();
    }

    close() {
        this.isOpen = false;
        this.mobileMenu.classList.remove('translate-x-0');
        this.mobileMenu.classList.add('translate-x-full');
        document.body.style.overflow = '';
        this.openButton.focus();
    }
}

// ===================================
// Scroll Animations
// ===================================

class ScrollAnimations {
    constructor() {
        this.init();
    }

    init() {
        // Animate elements on scroll
        const animatedElements = document.querySelectorAll('.pothi-card, .step-card, .service-card');

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }
}

// ===================================
// Form Handlers (for future use)
// ===================================

class FormHandlers {
    constructor() {
        this.init();
    }

    init() {
        // Add any form handling here when forms are added
        // For example: contact form, booking form, etc.
    }

    static validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
}

// ===================================
// Scroll Progress Indicator
// ===================================

class ScrollProgress {
    constructor() {
        this.progressBar = null;
        this.init();
    }

    init() {
        // Create progress bar element
        this.progressBar = document.createElement('div');
        this.progressBar.className = 'scroll-progress';
        this.progressBar.style.width = '0%';
        document.body.appendChild(this.progressBar);

        // Update progress on scroll
        window.addEventListener('scroll', this.updateProgress);
    }

    updateProgress = () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        this.progressBar.style.width = scrolled + '%';
    }
}

// ===================================
// FAQ Accordion
// ===================================

class FAQAccordion {
    constructor() {
        this.init();
    }

    init() {
        const faqItems = document.querySelectorAll('.faq-item');

        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            if (question) {
                question.addEventListener('click', () => this.toggle(item));
            }
        });
    }

    toggle(item) {
        const isActive = item.classList.contains('active');

        // Close all other items
        document.querySelectorAll('.faq-item').forEach(i => {
            i.classList.remove('active');
        });

        // Toggle current item
        if (!isActive) {
            item.classList.add('active');
        }
    }
}

// ===================================
// Analytics & Tracking (Optional)
// ===================================

class Analytics {
    constructor() {
        this.init();
    }

    init() {
        // Track button clicks
        document.querySelectorAll('.btn-ornate, a').forEach(element => {
            element.addEventListener('click', (e) => {
                const label = e.target.textContent.trim() || e.target.getAttribute('href');
                this.trackEvent('click', label);
            });
        });
    }

    trackEvent(category, label) {
        // Replace with your analytics code
        // Example: gtag('event', category, { event_label: label });
        console.log(`Analytics: ${category} - ${label}`);
    }
}

// ===================================
// Initialize Application
// ===================================

class App {
    constructor() {
        this.components = [];
    }

    init() {
        // Initialize components when DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setup());
        } else {
            this.setup();
        }
    }

    setup() {
        // Initialize all components
        this.components.push(new SmoothScrollNav());
        this.components.push(new MobileMenu());
        this.components.push(new ScrollAnimations());
        this.components.push(new ScrollProgress());
        this.components.push(new FAQAccordion());

        // Uncomment if needed
        // this.components.push(new FormHandlers());
        // this.components.push(new Analytics());

        console.log('Spirit Tarot Healer - Initialized');
    }
}

// ===================================
// Export for Module Usage
// ===================================

// If using modules
export { App, TAILWIND_CONFIG };

// If using traditional script tag
if (typeof window !== 'undefined') {
    window.SpiritTarotApp = new App();
    window.SpiritTarotApp.init();
}
