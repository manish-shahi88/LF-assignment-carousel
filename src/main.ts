document.addEventListener('DOMContentLoaded', function () {
  const slides: HTMLElement = document.querySelector('.carousel-slide')!;
  const images: NodeListOf<HTMLImageElement> = document.querySelectorAll('.carousel-slide img');
  const prevBtn: HTMLButtonElement = document.getElementById('prevBtn') as HTMLButtonElement;
  const nextBtn: HTMLButtonElement = document.getElementById('nextBtn') as HTMLButtonElement;
  const dotsContainer: HTMLElement = document.querySelector('.carousel-dots')!;
  let slideIndex: number = 0;

  // Create dots
  images.forEach((_, index) => {
    const dot: HTMLSpanElement = document.createElement('span');
    dot.classList.add('dot');
    dotsContainer.appendChild(dot);
    dot.addEventListener('click', () => {
      goToSlide(index);
    });
  });

  const dots: NodeListOf<HTMLSpanElement> = document.querySelectorAll('.dot');

  // Show current slide
  function showSlide(index: number): void {
    slides.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }

  // Go to specific slide
  function goToSlide(index: number): void {
    slideIndex = index;
    showSlide(slideIndex);
  }

  // Next slide
  function nextSlide(): void {
    slideIndex = (slideIndex + 1) % images.length;
    showSlide(slideIndex);
  }

  // Previous slide
  function prevSlide(): void {
    slideIndex = (slideIndex - 1 + images.length) % images.length;
    showSlide(slideIndex);
  }

  // Button event listeners
  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);

  // Initial slide display
  showSlide(slideIndex);
});
