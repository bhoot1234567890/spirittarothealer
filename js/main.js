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
// Accessibility Enhancements
// ===================================

class AccessibilityEnhancements {
    constructor() {
        this.init();
    }

    init() {
        this.ensureTouchTargets();
        this.addAriaLabels();
        this.handleKeyboardNavigation();
    }

    // Ensure touch targets meet WCAG 2.5.5 (44x44px minimum)
    ensureTouchTargets() {
        const interactiveElements = document.querySelectorAll('a, button, .btn-ornate');

        interactiveElements.forEach(element => {
            const computedStyle = window.getComputedStyle(element);
            const width = parseFloat(computedStyle.width);
            const height = parseFloat(computedStyle.height);

            // Add padding to small elements
            if (width < 44 || height < 44) {
                element.style.minWidth = '44px';
                element.style.minHeight = '44px';
                element.style.display = 'inline-flex';
                element.style.alignItems = 'center';
                element.style.justifyContent = 'center';
            }
        });
    }

    // Add ARIA labels to icon-only buttons
    addAriaLabels() {
        const iconButtons = document.querySelectorAll('button:not([aria-label]):not(.faq-question)');

        iconButtons.forEach(button => {
            const icon = button.querySelector('.material-symbols-outlined');
            const text = button.textContent.trim();

            if (icon && !text) {
                const iconName = icon.textContent;
                // Generate label from icon name
                const label = this.iconToLabel(iconName);
                if (label) {
                    button.setAttribute('aria-label', label);
                }
            }
        });
    }

    // Convert Material Symbols icon names to readable labels
    iconToLabel(iconName) {
        const labels = {
            'close': 'Close menu',
            'menu_book': 'Open menu',
            'auto_awesome': 'Spirit Tarot Healer',
            'favorite': 'Love',
            'phone_in_talk': 'Phone call',
            'mail': 'Email',
            'touch_app': 'Tap to select',
            'visibility': 'View',
            'spa': 'Healing',
            'lock': 'Secure',
            'notifications_active': 'Notifications',
            'verified': 'Verified',
            'person': 'About reader',
            'help': 'Help',
            'expand_more': 'Expand',
            'format_quote': 'Quote',
            'star': 'Star',
            'moon_stars': 'Moon and stars',
            'sunny': 'Sun',
            'schedule': 'Schedule',
            'radio_button_checked': 'Selected',
            'radio_button_unchecked': 'Not selected',
            'mark_email_unread': 'Email',
            'psychology': 'Psychology'
        };

        return labels[iconName] || null;
    }

    // Enhanced keyboard navigation
    handleKeyboardNavigation() {
        // Add keyboard handlers for custom interactive elements
        document.querySelectorAll('.pothi-card, .tarot-card-display').forEach(card => {
            if (!card.getAttribute('tabindex')) {
                card.setAttribute('tabindex', '0');
                card.setAttribute('role', 'button');
            }

            // Handle Enter and Space keys
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    card.click();
                }
            });
        });
    }
}

// ===================================
// Toast Notifications
// ===================================

class ToastNotification {
    constructor() {
        this.toast = null;
        this.timeout = null;
    }

    show(message, type = 'success') {
        // Create toast element if it doesn't exist
        if (!this.toast) {
            this.toast = document.createElement('div');
            this.toast.className = `toast toast-${type}`;
            document.body.appendChild(this.toast);
        }

        this.toast.textContent = message;
        this.toast.classList.add('show');

        // Clear existing timeout
        if (this.timeout) {
            clearTimeout(this.timeout);
        }

        // Auto-hide after 4 seconds
        this.timeout = setTimeout(() => {
            this.hide();
        }, 4000);
    }

    hide() {
        if (this.toast) {
            this.toast.classList.remove('show');
        }
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
        this.components.push(new AccessibilityEnhancements());

        // Uncomment if needed
        // this.components.push(new FormHandlers());
        // this.components.push(new Analytics());

        // Make ToastNotification globally available
        window.toast = new ToastNotification();

        console.log('Spirit Tarot Healer - Initialized');
    }
}

// ===================================
// Initialize Application (Traditional Script Tag)
// ===================================

// Initialize for traditional script tag usage
if (typeof window !== 'undefined') {
    window.SpiritTarotApp = new App();
    window.SpiritTarotApp.init();
}

// Note: For ES6 modules, use type="module" in script tag and uncomment below:
// export { App, TAILWIND_CONFIG };

