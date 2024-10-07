 /*--------------------
    hamburger_menu_sp
  --------------------*/
  const hamburger = document.getElementById('hamburger');
  const bars = hamburger.querySelectorAll('.bar');
  const menu = document.querySelector('.hamburger_display');


  if (hamburger && menu) {
    hamburger.addEventListener('click', () => {
      bars.forEach(bar => bar.classList.toggle('active'));
      menu.classList.toggle('active');
    });
  } else {
    console.error('Hamburger menu or display not found');
  }
