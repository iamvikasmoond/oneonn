// Typewriter effect
document.addEventListener("DOMContentLoaded", () => {
  const typewriter = document.getElementById('typewriter');
  if (typewriter) {
    const text = "> Rewriting… intelligence_";
    let index = 0;

    function type() {
      if (index < text.length) {
        typewriter.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 70);
      }
    }

    type();
  }

  // Glitch on logo click
  const logo = document.getElementById("logo");
  if (logo) {
    logo.addEventListener("click", () => {
      document.body.classList.add("glitch");
      setTimeout(() => document.body.classList.remove("glitch"), 1000);
    });
  }

  // Glitch on logo with class `.oneonn-logo`
  const logoAlt = document.querySelector('.oneonn-logo');
  if (logoAlt) {
    logoAlt.addEventListener('click', () => {
      document.body.classList.add('glitch-effect');
      setTimeout(() => document.body.classList.remove('glitch-effect'), 1000);
    });
  }

  // Intersection observer animation
  const sections = document.querySelectorAll("section");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.1 });

  sections.forEach(section => observer.observe(section));
});