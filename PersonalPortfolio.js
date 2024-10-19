// GSAP Animations
gsap.from(".nav .left h5", {
    y: -50,
    duration: 1,
    opacity: 0
});
gsap.from(".nav .right a", {
    y: -50,
    duration: 1,
    opacity: 0,
    delay: 0.5,
    stagger: 0.5
});
gsap.from(".welcome .left1 h1", {
    x: -50,
    duration: 0.5,
    delay: 1,
    opacity: 0
});
gsap.from(".right1 img", {
    scale: 0,
    duration: 2,
    delay: 1.5,
    rotate: 360,
});
gsap.from(".page2 .cards .card1", {
    y: -50,
    opacity: 0,
    duration: 1,
    stagger: 0.5,
    scrollTrigger: {
        trigger: ".page2 .cards .card1",
        scroller: 'body',
        start: 'top 70%',
        end: 'top 40%',
        scrub: 2
    }
});

// JavaScript for form submission confirmation
const form = document.getElementById('contact-form');
const confirmation = document.getElementById('confirmation');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    // You can implement AJAX here if needed for better user experience
    confirmation.classList.remove('hidden'); // Show confirmation message
    form.reset(); // Reset the form fields
});

