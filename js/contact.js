const slider = document.getElementById("slider");
const slides = document.querySelectorAll(".slide");
let currentIndex = 0;
let intervalId;

function showNextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function startSlider() {
    intervalId = setInterval(showNextSlide, 2000);
}

function stopSlider() {
    clearInterval(intervalId);
}

slider.addEventListener("mouseenter", stopSlider);
slider.addEventListener("mouseleave", startSlider);

startSlider();