//Collapsible menu items
document.addEventListener('DOMContentLoaded', function() {
    var coll = document.getElementsByClassName("collapsible-header");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight){
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            } 
        });
    }
});

//Collapsible menu for mobile/smaller screens
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded');

    const toggleButton = document.querySelector('.header-toggle');
    const header = document.querySelector('header');

    console.log('Toggle button:', toggleButton);
    console.log('Header:', header);

    if (toggleButton && header) {
        toggleButton.addEventListener('click', function() {
            console.log('Button clicked');
            header.classList.toggle('open');
            console.log('Header classes:', header.classList);
        });
    } else {
        console.error('Toggle button or header not found');
    }

    function adjustHeader() {
        console.log('Adjusting header, window width:', window.innerWidth);
        if (window.innerWidth > 768) {
            header.classList.remove('open');
            header.style.transform = 'none';
        } else {
            header.style.transform = 'translateX(-100%)';
        }
    }

    window.addEventListener('resize', adjustHeader);
    adjustHeader();
});