document.addEventListener('DOMContentLoaded', () => {

  /*--------------------
    svg_animation
  --------------------*/
  const applySVGAnimation = (selector, enterAttrs, leaveAttrs) => {
    const elements = document.querySelectorAll(selector);

    elements.forEach(el => {
      const pathElement = el.querySelector('path');
      el.addEventListener('mouseenter', () => {
        Object.keys(enterAttrs).forEach(attr => pathElement.setAttribute(attr, enterAttrs[attr]));
      });

      el.addEventListener('mouseleave', () => {
        Object.keys(leaveAttrs).forEach(attr => pathElement.setAttribute(attr, leaveAttrs[attr]));
      });
    });
  };

  // header_nav
  applySVGAnimation('.header_nav_link', { d: 'M1 6L5 2L9 6', stroke: '#005BAC' }, { d: 'M1 1L5 5L9 1', stroke: '#E5E3E1' });

  // portfolio_link
  applySVGAnimation('.project_list', { stroke: '#005BAC' }, { stroke: '#757575' });

  // goal_button
  applySVGAnimation('.goal_button', { d: 'M6 11.5L1 6.5L6 1.5', stroke: '#B4B4B4' }, { d: 'M1 11.5L6 6.5L1 1.5', stroke: 'currentColor' });

  /*--------------------
  section_title_animation
  --------------------*/
  const animateTitle = (title) => {
    const text = title.innerHTML;
    title.innerHTML = '';

    text.split('').forEach((char, index) => {
      const span = document.createElement('span');
      span.classList.add('letter');
      span.innerHTML = char === ' ' ? '&nbsp;' : char;
      title.appendChild(span);

      setTimeout(() => {
        span.style.opacity = 1;
      }, index * 20);
    });
  };

  const titleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateTitle(entry.target);
        titleObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.animatedTitle').forEach(title => titleObserver.observe(title));

  /*--------------------
    scroll_animation
  --------------------*/
  const animateOnScroll = (selector, className = 'visible') => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(className);
        }
      });
    }, { threshold: 0 });

    document.querySelectorAll(selector).forEach(item => observer.observe(item));
  };

  animateOnScroll('.scroll_right');
  animateOnScroll('.scroll_left');

  /*--------------------
    smooth_scroll
  --------------------*/
  document.querySelectorAll('.service_top_link').forEach(scrollContent => {
    scrollContent.addEventListener('click', event => {
      event.preventDefault();
      const href = scrollContent.getAttribute('href');
      const targetSection = document.querySelector(href);

      if (targetSection) {
        const headerGap = 60;
        const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - headerGap;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
      }
    });
  });

  /*--------------------
    count_characters
  --------------------*/
  const textarea = document.getElementById('message_input');
  const countDisplay = document.getElementById('count_characters');
  const maxCharacters = 600;

  textarea.addEventListener('input', () => {
    const remainingCharacters = maxCharacters - textarea.value.length;
    countDisplay.textContent = `残り文字数 : ${remainingCharacters}`;
  });

  /*--------------------
    contact_form
  --------------------*/
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    const form = event.target;
    if (!form.checkValidity()) {
      event.preventDefault();
      alert('Please fill in all the required fields.');
      return;
    }

    event.preventDefault();
    window.location.href = 'contact_success.html';
  });

});
