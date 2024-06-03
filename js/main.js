const swiperHero = new Swiper('.swiper-hero', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // freeMode: true,
    spaceBetween: 16,
    slidesPerView: 1.15,

    navigation: {
      nextEl: '#menu__right-arrow',
      prevEl: '#menu__left-arrow',
    },
    breakpoints: {
      1440: {
        slidesPerView: 2.15,
           spaceBetween: 40,
 
      },
  }
});

//   swiper.on('click', function (swiper, event) {
//     console.log('Текущий слайд:', swiper.activeIndex + 1); // Выводит номер текущего слайда в консоль
// });


  //contact us

const contactUsModal = document.getElementById('contactUsModal');
const contactShowModal = document.getElementById('contactUsBtn');

contactShowModal.addEventListener('click', showModal);

function showModal() {
    contactUsModal.classList.remove('hidden')
}


const closeContactUsModal = document.querySelector('.contactUs-modal__close');

closeContactUsModal.addEventListener('click', closeModal)

function closeModal() {
    contactUsModal.classList.add('hidden');
}

const submitButtons = document.querySelectorAll('.submitButton');

        // Вешаем обработчик события на каждую кнопку
        submitButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Получаем идентификатор формы из data-атрибута кнопки
                const formId = this.getAttribute('data-form-id');
                const form = document.getElementById(formId);
                
                // Отправляем форму
                form.submit();
            });
        });



//hero image

const heroImg = document.getElementById('hero-img');

if (window.innerWidth <= 768) {
  heroImg.src = './../img/icons/mobile/hero-img-mobile.jpg';
} else {
  heroImg.src = './../img/hero.jpg';
}


//mobile-nav
const mobileNavBtn = document.querySelector('.mobile-menu-open');
const mobileNav = document.querySelector('.mobile-nav')
const mobileBtnImg = document.getElementById('mobileBtnImg');

mobileNavBtn.addEventListener('click', function() {
  mobileNav.classList.toggle('hidden');
  if (!mobileNav.classList.contains('hidden')) {
    mobileBtnImg.src = './../img/icons/mobile/close.svg'
  } else {
    mobileBtnImg.src = './../img/icons/mobile/burger.svg'
  }
})