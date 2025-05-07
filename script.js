$(window).on("load", function() {
    const loader = $('.loading-screen');
    loader.fadeOut(1000)
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
