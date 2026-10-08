(() => {
  'use strict';

  const navigation = document.querySelector('.main-nav');
  const menuButton = document.querySelector('.nav-toggle');
  if (navigation && menuButton) {
    menuButton.hidden = false;
    navigation.dataset.collapsible = 'true';
    const setMenuOpen = (open) => {
      navigation.dataset.open = String(open);
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    };
    menuButton.addEventListener('click', () => setMenuOpen(menuButton.getAttribute('aria-expanded') !== 'true'));
    navigation.addEventListener('click', (event) => {
      if (event.target.closest('a')) setMenuOpen(false);
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
        setMenuOpen(false);
        menuButton.focus();
      }
    });
  }

  const emailButton = document.querySelector('.copy-email');
  if (emailButton && navigator.clipboard && window.isSecureContext) {
    emailButton.hidden = false;
    emailButton.addEventListener('click', async () => {
      const feedback = document.querySelector('.copy-status');
      try {
        await navigator.clipboard.writeText(emailButton.dataset.email);
        feedback.textContent = 'Email copied.';
      } catch (_) {
        feedback.textContent = 'Please select the email address to copy it.';
      }
    });
  }

  const links = Array.from(document.querySelectorAll('[data-section]'));
  if (links.length) {
    let scheduled = false;
    const updateCurrentSection = () => {
      const threshold = document.querySelector('.site-header').offsetHeight + 80;
      let current = links[0];
      links.forEach((link) => {
        const section = document.getElementById(link.dataset.section);
        if (section && section.getBoundingClientRect().top <= threshold) current = link;
      });
      links.forEach((link) => {
        if (link === current) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
      scheduled = false;
    };
    window.addEventListener('scroll', () => {
      if (scheduled) return;
      scheduled = true;
      window.requestAnimationFrame(updateCurrentSection);
    }, { passive: true });
    window.addEventListener('resize', updateCurrentSection);
    updateCurrentSection();
  }
})();
