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
    document.querySelector('.accessible-caption').style.display = 'none';

    autoSlideInterval = setInterval(nextSlide, 5000);
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

nextBtn.addEventListener('click', () => {
    stopAutoSlide();
    document.querySelector('.accessible-caption').style.display = 'block';
    nextSlide();
    setTimeout(() => {
        document.querySelector('.accessible-caption').textContent = carouselSlides[currentIndex].querySelector('.slide-caption').textContent;
    }, 100);
    
    setTimeout(() => startAutoSlid(), 200);
});

prevBtn.addEventListener('click', () => {
    stopAutoSlide();
    document.querySelector('.accessible-caption').style.display = 'block';
    prevSlide();
    setTimeout(() => {
        document.querySelector('.accessible-caption').textContent = carouselSlides[currentIndex].querySelector('.slide-caption').textContent;
    }, 100);
    
    setTimeout(() => startAutoSlid(), 200);
});

showSlide(currentIndex);
startAutoSlid();