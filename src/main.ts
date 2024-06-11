// document.addEventListener('DOMContentLoaded', function () {
//   const slides: HTMLElement = document.querySelector('.carousel-slide')!;
//   const images: NodeListOf<HTMLImageElement> = document.querySelectorAll('.carousel-slide img');
//   const prevBtn: HTMLButtonElement = document.getElementById('prevBtn') as HTMLButtonElement;
//   const nextBtn: HTMLButtonElement = document.getElementById('nextBtn') as HTMLButtonElement;
//   const dotsContainer: HTMLElement = document.querySelector('.carousel-dots')!;
//   let slideIndex: number = 0;

//   // Create dots
//   images.forEach((_, index) => {
//     const dot: HTMLSpanElement = document.createElement('span');
//     dot.classList.add('dot');
//     dotsContainer.appendChild(dot);
//     dot.addEventListener('click', () => {
//       goToSlide(index);
//     });
//   });

//   const dots: NodeListOf<HTMLSpanElement> = document.querySelectorAll('.dot');

//   // Show current slide
//   function showSlide(index: number): void {
//     slides.style.transform = `translateX(-${index * 100}%)`;
//     dots.forEach((dot, i) => {
//       dot.classList.toggle('active', i === index);
//     });
//   }

//   // Go to specific slide
//   function goToSlide(index: number): void {
//     slideIndex = index;
//     showSlide(slideIndex);
//   }

//   // Next slide
//   function nextSlide(): void {
//     slideIndex = (slideIndex + 1) % images.length;
//     showSlide(slideIndex);
//   }

//   // Previous slide
//   function prevSlide(): void {
//     slideIndex = (slideIndex - 1 + images.length) % images.length;
//     showSlide(slideIndex);
//   }

//   // Button event listeners
//   nextBtn.addEventListener('click', nextSlide);
//   prevBtn.addEventListener('click', prevSlide);

//   // Initial slide display
//   showSlide(slideIndex);
// });



interface CarouselOptions {
  transitionTime: number;
  holdTime: number;
}

document.addEventListener('DOMContentLoaded', function () {
  const carousels = document.querySelectorAll('.carousel-container');

  carousels.forEach((carouselContainer) => {
    const slides: HTMLElement = carouselContainer.querySelector('.carousel-slide')!;
    const images: NodeListOf<HTMLImageElement> = carouselContainer.querySelectorAll('.carousel-slide img');
    const prevBtn: HTMLButtonElement = carouselContainer.querySelector('#prevBtn') as HTMLButtonElement;
    const nextBtn: HTMLButtonElement = carouselContainer.querySelector('#nextBtn') as HTMLButtonElement;
    const dotsContainer: HTMLElement = carouselContainer.querySelector('.carousel-dots')!;
    let slideIndex: number = 0;

    const transitionTime = parseInt(carouselContainer.getAttribute('data-transition-time') || '500');
    const holdTime = parseInt(carouselContainer.getAttribute('data-hold-time') || '3000');
  
    // Create dots
    images.forEach((_, index) => {
      const dot: HTMLSpanElement = document.createElement('span');
      dot.classList.add('dot');
      dotsContainer.appendChild(dot);
      dot.addEventListener('click', () => {
        goToSlide(index);
      });
    });
  
    const dots: NodeListOf<HTMLSpanElement> = carouselContainer.querySelectorAll('.dot');
  
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

    // Automatic sliding
    let autoSlideInterval = setInterval(nextSlide, holdTime);

    // Reset interval when manual navigation is used
    function resetInterval() {
      clearInterval(autoSlideInterval);
      autoSlideInterval = setInterval(nextSlide, holdTime);
    }
  
    // Button event listeners
    nextBtn.addEventListener('click', () => {
      nextSlide();
      resetInterval();
    });
    prevBtn.addEventListener('click', () => {
      prevSlide();
      resetInterval();
    });
  
    // Initial slide display
    showSlide(slideIndex);
  });
});
