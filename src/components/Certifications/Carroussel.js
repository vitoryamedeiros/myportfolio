document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.createElement('button');
    prevButton.innerText = '</';
    prevButton.classList.add('carousel-button');
    document.querySelector('.certificados-container').insertBefore(prevButton, document.querySelector('.certf-cards'));
    const nextButton = document.createElement('button');
    nextButton.innerText = '/>';
    nextButton.classList.add('carousel-button');
    document.querySelector('.certificados-container').appendChild(nextButton);
    const container = document.querySelector('.certf-cards');
    let scrollAmount = 0;
    nextButton.addEventListener('click', function() {
      const containerWidth = container.scrollWidth;
      const cardWidth = container.querySelector('.cCarousel-item').offsetWidth + 16; // 16px de margem direita
      scrollAmount += cardWidth;
      if (scrollAmount >= containerWidth) {
        scrollAmount = 0;
      }
      container.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    });
    prevButton.addEventListener('click', function() {
      const cardWidth = container.querySelector('.cCarousel-item').offsetWidth + 16; // 16px de margem direita
      scrollAmount -= cardWidth;
      if (scrollAmount < 0) {
        scrollAmount = container.scrollWidth - container.clientWidth;
      }
      container.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    });
  });