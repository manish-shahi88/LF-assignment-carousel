document.addEventListener('DOMContentLoaded', function () {
    var slides = document.querySelector('.carousel-slide');
    var images = document.querySelectorAll('.carousel-slide img');
    var prevBtn = document.getElementById('prevBtn');
    var nextBtn = document.getElementById('nextBtn');
    var dotsContainer = document.querySelector('.carousel-dots');
    var slideIndex = 0;
    // Create dots
    images.forEach(function (_, index) {
        var dot = document.createElement('span');
        dot.classList.add('dot');
        dotsContainer.appendChild(dot);
        dot.addEventListener('click', function () {
            goToSlide(index);
        });
    });
    var dots = document.querySelectorAll('.dot');
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
    // Button event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    // Initial slide display
    showSlide(slideIndex);
});
