import { useBlogSlider } from './slider';

export const initBlogFilterWithSwiper = () => {
  const filterButtons = document.querySelectorAll('.blog__filter-btn');
  const slides = document.querySelectorAll('.swiper-slide');

  filterButtons.forEach((button) => {
    button.addEventListener('click', function () {
      filterButtons.forEach((btn) =>
        btn.classList.remove('blog__filter-btn-active'),
      );
      this.classList.add('blog__filter-btn-active');
      const filterValue = this.getAttribute('data-filter');
      filterSwiperSlides(filterValue);
    });
  });

  function filterSwiperSlides(filter) {
    let visibleSlides = 0;
    slides.forEach((slide) => {
      const slideCategory = slide.getAttribute('data-category');
      if (filter === 'all' || slideCategory === filter) {
        slide.style.display = 'block';
        slide.classList.remove('hidden');
        visibleSlides++;
      } else {
        slide.style.display = 'none';
        slide.classList.add('hidden');
      }
    });
    setTimeout(() => {
      if (useBlogSlider) {
        useBlogSlider.update();
        if (visibleSlides <= 3) {
          useBlogSlider.params.centeredSlides = false;
          useBlogSlider.params.loop = false;
        } else {
          useBlogSlider.params.centeredSlides = true;
        }
        useBlogSlider.update();
        useBlogSlider.slideTo(0);
      }
    }, 100);
  }
};
