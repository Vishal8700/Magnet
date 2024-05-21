let currentIndex = 0;
let slides = document.getElementsByClassName('carousel-item');
let dots = document.getElementsByClassName('nav-dot');

function showSlide(index) {
    if (index >= slides.length) { currentIndex = 0; }
    if (index < 0) { currentIndex = slides.length - 1; }
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
        dots[i].classList.remove('active');
    }
    slides[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');
}

function nextSlide() {
    currentIndex++;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex--;
    showSlide(currentIndex);
}

function currentSlide(index) {
    currentIndex = index;
    showSlide(currentIndex);
}

function autoPlay() {
    nextSlide();
    setTimeout(autoPlay, 3000);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
    autoPlay();
});

