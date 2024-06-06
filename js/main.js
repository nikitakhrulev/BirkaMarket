

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
// let ag = false;
// const submitButtons = document.querySelectorAll('.submitButton');

//         // Вешаем обработчик события на каждую кнопку
//         submitButtons.forEach(button => {
//             button.addEventListener('click', function() {
//                 // Получаем идентификатор формы из data-атрибута кнопки
//                 const formId = this.getAttribute('data-form-id');
//                 const form = document.getElementById(formId);
                
//                 if (ag) {
//                   form.submit();
//                 }
                
//             });
//         });


//hero image

const heroImg = document.getElementById('hero-img');

if (window.innerWidth <= 768) {
  heroImg.src = './../img/icons/mobile/hero-img-mobile.jpg';
} else {
  heroImg.src = './../img/hero.jpg';
}


