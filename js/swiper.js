var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 4,
    direction: 'vertical',
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    navigation: {
      nextEl: "#slider__right-arrow",
      prevEl: "#slider__left-arrow",
    },
    thumbs: {
      swiper: swiper,
    },
  });