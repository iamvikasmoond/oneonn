document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const main = document.querySelector('main');
    const themeToggle = document.querySelector('.theme-toggle');
    let darkMode = false;

    // Initialize the sidebar to be collapsed by default
    sidebar.classList.add('collapsed');

    menuToggle.addEventListener('click', function() {
        sidebar.classList.toggle('collapsed');
        sidebar.classList.toggle('expanded');
    });

    themeToggle.addEventListener('click', function() {
        darkMode = !darkMode;
        document.body.classList.toggle('dark-mode', darkMode);
    });
});
