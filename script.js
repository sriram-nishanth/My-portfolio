window.addEventListener("load", () => {
    const loadingScreen = document.querySelector(".loading-screen");

    // Add a delay before hiding the loading screen
    setTimeout(() => {
        loadingScreen.style.opacity = "0"; // Fade out the loading screen
        loadingScreen.style.transition = "opacity 1s ease"; // Smooth fade-out effect

        // Remove the loading screen from the DOM after the fade-out
        setTimeout(() => {
            loadingScreen.style.display = "none";
        }, 1000); // Match the duration of the fade-out effect
    }, 2000); // Delay of 2 seconds before starting the fade-out
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
