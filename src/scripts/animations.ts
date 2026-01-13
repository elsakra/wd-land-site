import { animate, inView, scroll } from '@motionone/dom';

// Initialize animations when DOM is loaded
function initAnimations() {
  // Animate elements on scroll
  const animateElements = document.querySelectorAll<HTMLElement>('.animate-on-scroll');
  
  animateElements.forEach((element, index) => {
    inView(element, () => {
      animate(
        element,
        { opacity: [0, 1], y: [30, 0] },
        { duration: 0.6, delay: index * 0.1 }
      );
    });
  });

  // Navbar scroll effect
  const navbar = document.querySelector<HTMLElement>('nav');
  if (navbar) {
    scroll(({ y }) => {
      if (y.current > 50) {
        navbar.classList.add('backdrop-blur-md', 'bg-white/90', 'shadow-lg');
        navbar.classList.remove('bg-transparent');
      } else {
        navbar.classList.remove('backdrop-blur-md', 'bg-white/90', 'shadow-lg');
        navbar.classList.add('bg-transparent');
      }
    });
  }

  // Button hover animations
  const buttons = document.querySelectorAll<HTMLElement>('.btn-primary, .btn-secondary');
  buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      animate(button, { scale: 1.05 }, { duration: 0.2 });
    });
    
    button.addEventListener('mouseleave', () => {
      animate(button, { scale: 1 }, { duration: 0.2 });
    });
  });

  // Card hover animations
  const cards = document.querySelectorAll<HTMLElement>('.card-hover');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      animate(card, { y: -5, scale: 1.02 }, { duration: 0.3 });
    });
    
    card.addEventListener('mouseleave', () => {
      animate(card, { y: 0, scale: 1 }, { duration: 0.3 });
    });
  });

  // Smooth scroll for anchor links
  const anchorLinks = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href')?.substring(1);
      const targetElement = document.getElementById(targetId || '');
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Mobile menu toggle
  const mobileMenuButton = document.querySelector<HTMLElement>('[data-mobile-menu-toggle]');
  const mobileMenu = document.querySelector<HTMLElement>('[data-mobile-menu]');
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.contains('open');
      
      if (isOpen) {
        animate(mobileMenu, { opacity: [1, 0], y: [0, -10] }, { duration: 0.2 });
        setTimeout(() => {
          mobileMenu.classList.add('hidden');
          mobileMenu.classList.remove('open');
        }, 200);
      } else {
        mobileMenu.classList.remove('hidden');
        mobileMenu.classList.add('open');
        animate(mobileMenu, { opacity: [0, 1], y: [-10, 0] }, { duration: 0.2 });
      }
    });
  }

  // Parallax effect for hero background
  const heroSection = document.querySelector<HTMLElement>('.hero-parallax');
  if (heroSection) {
    scroll(({ y }) => {
      const rate = y.current * -0.5;
      animate(heroSection, { y: rate }, { duration: 0 });
    });
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAnimations);
} else {
  initAnimations();
}

export { initAnimations };