// Portfolio JavaScript

// Smooth alert for Resume button (if resume is missing)

const resumeButton = document.querySelector(".btn2");

resumeButton.addEventListener("click", function () {
    console.log("Resume Download Started");
});

// Navbar shadow effect

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
    }
    else {
        header.style.boxShadow = "0 5px 15px rgba(0,0,0,0.08)";
    }

});