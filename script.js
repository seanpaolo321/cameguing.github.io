// Add script for automatic slideshow
document.addEventListener("DOMContentLoaded", function () {
    showSlides();
});

function showSlides() {
    let slideshowContainers = document.querySelectorAll(".slideshow-container");

    slideshowContainers.forEach(function (container) {
        let slides = container.getElementsByClassName("hero-slide");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        let slideIndex = 0;
        setInterval(function () {
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) {
                slideIndex = 1;
            }
            slides[slideIndex - 1].style.display = "block";
        }, 2000); // Adjust the interval (in milliseconds) between slides
    });
}
