// document.addEventListener('DOMContentLoaded', function () {
//   const slides: HTMLElement = document.querySelector('.carousel-slide')!;
//   const images: NodeListOf<HTMLImageElement> = document.querySelectorAll('.carousel-slide img');
//   const prevBtn: HTMLButtonElement = document.getElementById('prevBtn') as HTMLButtonElement;
//   const nextBtn: HTMLButtonElement = document.getElementById('nextBtn') as HTMLButtonElement;
//   const dotsContainer: HTMLElement = document.querySelector('.carousel-dots')!;
//   let slideIndex: number = 0;
document.addEventListener('DOMContentLoaded', function () {
    var carousels = document.querySelectorAll('.carousel-container');
    carousels.forEach(function (carouselContainer) {
        var slides = carouselContainer.querySelector('.carousel-slide');
        var images = carouselContainer.querySelectorAll('.carousel-slide img');
        var prevBtn = carouselContainer.querySelector('#prevBtn');
        var nextBtn = carouselContainer.querySelector('#nextBtn');
        var dotsContainer = carouselContainer.querySelector('.carousel-dots');
        var slideIndex = 0;
        var transitionTime = parseInt(carouselContainer.getAttribute('data-transition-time') || '500');
        var holdTime = parseInt(carouselContainer.getAttribute('data-hold-time') || '3000');
        // Create dots
        images.forEach(function (_, index) {
            var dot = document.createElement('span');
            dot.classList.add('dot');
            dotsContainer.appendChild(dot);
            dot.addEventListener('click', function () {
                goToSlide(index);
            });
        });
        var dots = carouselContainer.querySelectorAll('.dot');
        // Show current slide
        function showSlide(index) {
            slides.style.transform = "translateX(-".concat(index * 100, "%)");
            dots.forEach(function (dot, i) {
                dot.classList.toggle('active', i === index);
            });
        }
        // Go to specific slide
        function goToSlide(index) {
            slideIndex = index;
            showSlide(slideIndex);
        }
        // Next slide
        function nextSlide() {
            slideIndex = (slideIndex + 1) % images.length;
            showSlide(slideIndex);
        }
        // Previous slide
        function prevSlide() {
            slideIndex = (slideIndex - 1 + images.length) % images.length;
            showSlide(slideIndex);
        }
        // Automatic sliding
        var autoSlideInterval = setInterval(nextSlide, holdTime);
        // Reset interval when manual navigation is used
        function resetInterval() {
            clearInterval(autoSlideInterval);
            autoSlideInterval = setInterval(nextSlide, holdTime);
        }
        // Button event listeners
        nextBtn.addEventListener('click', function () {
            nextSlide();
            resetInterval();
        });
        prevBtn.addEventListener('click', function () {
            prevSlide();
            resetInterval();
        });
        // Initial slide display
        showSlide(slideIndex);
    });
});
