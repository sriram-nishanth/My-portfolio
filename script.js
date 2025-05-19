$(window).on("load", function() {
    const loader = $('.loading-screen');
    loader.fadeOut(1000);
});

ScrollReveal().reveal('.portfolio-container', {
    origin: 'top',
    distance: '50px',
    duration: 1200,
    delay: 200,
    easing: 'ease-in-out',
    opacity: 0,
    scale: 0.95,
    reset: true
});

ScrollReveal().reveal('.skillset', {
    origin: 'left',
    distance: '50px',
    duration: 1200,
    delay: 300,
    easing: 'ease-in-out',
    opacity: 0,
    scale: 0.9,
    reset: true
});

ScrollReveal().reveal('.project-cards', {
    origin: 'right',
    distance: '50px',
    duration: 1200,
    delay: 400,
    easing: 'ease-in-out',
    opacity: 0,
    scale: 0.92,
    reset: true
});

ScrollReveal().reveal('.footer-content', {
    origin: 'bottom',
    distance: '50px',
    duration: 1200,
    delay: 500,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    opacity: 0,
    scale: 0.95,
    reset: true
});

function getResume() {
    const resume = document.getElementById("resume");
    if (resume) {
        console.log("Downloading resume...");
        resume.click(); // triggers the download
    } else {
        console.log("Resume link not found.");
    }
}
function closeNav() {
    const body=document.body; // Select the body element
    const nav = document.querySelector('.nav'); // Select the navigation bar
    nav.classList.remove('active'); // Remove the 'active' class 
    body.classList.remove('no-scroll')// Remove the 'active' class
}

function toggleNav() {
    const body=document.body;
    const nav = document.querySelector('.nav');
    nav.classList.toggle('active');
    body.classList.toggle('no-scroll') // Toggle the 'active' class
}

document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', closeNav); // Close the nav when a link is clicked
});
