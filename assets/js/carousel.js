const carouselSlides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');
let currentIndex = 0;
let autoSlideInterval;

function showSlide(index) {
    carouselSlides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % carouselSlides.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + carouselSlides.length) % carouselSlides.length;
    showSlide(currentIndex);
}

function startAutoSlid() {
    autoSlideInterval = setInterval(nextSlide, 3000);
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

nextBtn.addEventListener('click', () => {
    nextSlide();
    stopAutoSlide();
    startAutoSlid();
});

prevBtn.addEventListener('click', () => {
    prevSlide();
    stopAutoSlide();
    startAutoSlid();
});

showSlide(currentIndex);
startAutoSlid();