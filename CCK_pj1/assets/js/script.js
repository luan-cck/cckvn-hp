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
count_characters
--------------------*/
const textarea = document.getElementById('message_input');
const countDisplay = document.getElementById('count_characters');
const maxCharacters = 600;

textarea.addEventListener('input', () => {
  const remainingCharacters = maxCharacters - textarea.value.length;
  countDisplay.textContent = `Remaining Characters: ${remainingCharacters}`;
})
