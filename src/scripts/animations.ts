import { animate, inView, scroll } from '@motionone/dom';

// Initialize animations when DOM is loaded
function initAnimations() {
  // Fade in elements on scroll
  const fadeElements = document.querySelectorAll<HTMLElement>('.fade-in-scroll');
  fadeElements.forEach((element) => {
    inView(element, () => {
      animate(element, 
        { opacity: [0, 1], transform: ['translateY(20px)', 'translateY(0px)'] },
        { duration: 0.6, easing: 'ease-out' }
      );
    });
  });

  // Stagger animation for cards
  const cardContainers = document.querySelectorAll<HTMLElement>('.stagger-container');
  cardContainers.forEach((container) => {
    const cards = container.querySelectorAll<HTMLElement>('.stagger-item');
    inView(container, () => {
      cards.forEach((card, index) => {
        animate(card,
          { opacity: [0, 1], transform: ['translateY(30px)', 'translateY(0px)'] },
          { duration: 0.5, delay: index * 0.1, easing: 'ease-out' }
        );
      });
    });
  });

  // Hero text animation
  const heroTitle = document.querySelector<HTMLElement>('.hero-title');
  const heroSubtitle = document.querySelector<HTMLElement>('.hero-subtitle');
  const heroButtons = document.querySelector<HTMLElement>('.hero-buttons');
  
  if (heroTitle) {
    animate(heroTitle,
      { opacity: [0, 1], transform: ['translateY(30px)', 'translateY(0px)'] },
      { duration: 0.8, delay: 0.2, easing: 'ease-out' }
    );
  }
  
  if (heroSubtitle) {
    animate(heroSubtitle,
      { opacity: [0, 1], transform: ['translateY(30px)', 'translateY(0px)'] },
      { duration: 0.8, delay: 0.4, easing: 'ease-out' }
    );
  }
  
  if (heroButtons) {
    animate(heroButtons,
      { opacity: [0, 1], transform: ['translateY(30px)', 'translateY(0px)'] },
      { duration: 0.8, delay: 0.6, easing: 'ease-out' }
    );
  }

  // Navbar scroll effect
  const navbar = document.querySelector<HTMLElement>('.navbar');
  if (navbar) {
    scroll(({ y }) => {
      if (y.current > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  // Button hover effects
  const buttons = document.querySelectorAll<HTMLElement>('.btn-hover');
  buttons.forEach((button) => {
    button.addEventListener('mouseenter', () => {
      animate(button, { scale: 1.05 }, { duration: 0.2 });
    });
    
    button.addEventListener('mouseleave', () => {
      animate(button, { scale: 1 }, { duration: 0.2 });
    });
  });

  // Parallax effect for hero background
  const heroSection = document.querySelector<HTMLElement>('.hero-parallax');
  if (heroSection) {
    scroll(({ y }) => {
      const rate = y.current * -0.5;
      animate(heroSection, 
        { transform: `translateY(${rate}px)` },
        { duration: 0 }
      );
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