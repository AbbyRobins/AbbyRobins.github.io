//greeting
document.addEventListener('DOMContentLoaded', function()
{
    console.log("DOM loaded, running greeting function")
    const greetingElement = document.getElementById('greeting');
    const currentHour = new Date().getHours();
    let greetingText, greetingClass;

    if (currentHour <11) {
        greetingText = "Good morning!"
        greetingClass = "morning";
    } else if (currentHour <17) {
        greetingText = "Good afternoon!";
        greetingClass = "afternoon";
    } else {
        greetingText = "Good evening!";
        greetingClass = "evening";
    }

    console.log("Greeting text:", greetingText);
    if (greetingElement) {
        greetingElement.textContent = greetingText;
        greetingElement.classList.add(greetingClass);
    } else {
        console.log("Greeting element not found")
    }
});

//alert button with hover effect
const cowButton = document.getElementById('cow-button');

function changeTextOnHover() {
    cowButton.setAttribute('data-original-text', cowButton.getAttribute('data-after'));
    cowButton.setAttribute('data-after', 'Boop me!');
}

function revertText() {
    cowButton.setAttribute('data-after', 'Moo!');
}

cowButton.addEventListener('mouseover', changeTextOnHover);
cowButton.addEventListener('mouseout', revertText);
cowButton.addEventListener('click', function() {
    alert('Boop!');
})