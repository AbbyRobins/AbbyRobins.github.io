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
