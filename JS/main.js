// MENU
document.addEventListener('DOMContentLoaded', function() {
    const headerToggle = document.getElementById('header-toggle');
    const header = document.getElementById('header');

    headerToggle.addEventListener('click', function() {
        header.classList.toggle('open'); // Toggle the 'open' class
    });
});