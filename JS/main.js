//footer
const fYear = document.getElementById("footeryear");
const d = new Date();
fYear.textContent = d.getFullYear();

console.log("Today's date:", new Date().toDateString())

// looked up collapsible menu, this is what it told me to do... does not work? HIDING FOR NOW

//document.addEventListener('DOMContentLoaded', function() {
//    console.log('DOM fully loaded');

//    const toggleButton = document.querySelector('.header-toggle');
//    const header = document.querySelector('header');

//    console.log('Toggle button:', toggleButton);
//    console.log('Header:', header);

//    if (toggleButton && header) {
//        toggleButton.addEventListener('click', function() {
//            console.log('Button clicked');
//            header.classList.toggle('open');
//            console.log('Header classes:', header.classList);
//        });
//    } else {
//        console.error('Toggle button or header not found');
//    }
//
//    function adjustHeader() {
//        console.log('Adjusting header, window width:', window.innerWidth);
//        if (window.innerWidth > 768) {
//            header.classList.remove('open');
//            header.style.transform = 'none';
//        } else {
//            header.style.transform = 'translateX(-100%)';
//        }
//    }

//    window.addEventListener('resize', adjustHeader);
//    adjustHeader();
//});