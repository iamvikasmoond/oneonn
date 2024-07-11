document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('sidebar');

  nav.addEventListener('mouseenter', () => {
      nav.classList.add('expanded');
  });

  nav.addEventListener('mouseleave', () => {
      nav.classList.remove('expanded');
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const greetingElem = document.querySelector('.greeting');
  const date = new Date();
  const hours = date.getHours();

  let greeting = '';

  if (hours >= 5 && hours < 12) {
      greeting = 'Good Morning';
  } else if (hours >= 12 && hours < 17) {
      greeting = 'Good Afternoon';
  } else {
      greeting = 'Good Evening';
  }

  greetingElem.textContent = greeting;
});


function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('expanded');
}
