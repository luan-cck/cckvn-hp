/*--------------------
header_nav_svg_animation
--------------------*/
document.addEventListener('DOMContentLoaded', () => {
  const headerNavLinks = document.querySelectorAll('.header_nav_link');

  headerNavLinks.forEach(headerNavLink => {
    const arrowPath = headerNavLink.querySelector('path');

    headerNavLink.addEventListener('mouseenter', () => {
      arrowPath.setAttribute('d', 'M1 6L5 2L9 6');
      arrowPath.setAttribute('stroke', '#005BAC');
    });

    headerNavLink.addEventListener('mouseleave', () => {
      arrowPath.setAttribute('d', 'M1 1L5 5L9 1');
      arrowPath.setAttribute('stroke', '#E5E3E1');
    });
  });
});


/*--------------------
title_animation
--------------------*/
document.addEventListener('DOMContentLoaded', () => {
  const titles = document.querySelectorAll('.animatedTitle');

  titles.forEach(title => {
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
  });
});



/*--------------------
scroll_animation
--------------------*/
document.addEventListener('DOMContentLoaded', () => {
  const toRight = document.querySelectorAll('.scroll_right');
  const toLeft = document.querySelectorAll('.scroll_left')

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1 });

  toRight.forEach(item => {
    observer.observe(item);
  })

  toLeft.forEach(item => {
    observer.observe(item);
  })
})


/*--------------------
button_hover_animation
--------------------*/
document.addEventListener('DOMContentLoaded', () => {
  const goalButton = document.querySelector('.goal_button');
  const arrowPath = document.getElementById('arrow-path');

  goalButton.addEventListener('mouseenter', () => {
    arrowPath.setAttribute('d', 'M6 11.5L1 6.5L6 1.5');
    arrowPath.setAttribute('stroke', '#B4B4B4');
  });

  goalButton.addEventListener('mouseleave', () => {
    arrowPath.setAttribute('d', 'M1 11.5L6 6.5L1 1.5');
    arrowPath.setAttribute('stroke', 'currentColor');
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
  countDisplay.textContent = `Remaining Characters: ${remainingCharacters}`;
})
