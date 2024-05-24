const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // freeMode: true,
    slidesPerView: 2.15,
    spaceBetween: 40,

    navigation: {
      nextEl: '#menu__right-arrow',
      prevEl: '#menu__left-arrow',
    },


  });

  swiper.on('click', function (swiper, event) {
    console.log('Текущий слайд:', swiper.activeIndex + 1); // Выводит номер текущего слайда в консоль
});


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





// form

const form = document.getElementById('contact-form');

form.addEventListener('submit', formSend);

async function formSend(evt) {
    evt.preventDefault();


    let error = formValidate(form);

    let formData = new FormData(form);

    if (error === 0) {
        form.classList.add('_sending');
        let response = await fetch('sendmail.php', {
            method: 'POST',
            body: formData,
        });
        if (response.ok) {
            console.log('ok')
            form.reset();
        } else {
            console.log('not ok')
        }
    } else {
        alert('Заполните все поля')
    }
}


function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll('._req');

    for (let i = 0; i < formReq.length; i++) {
        const input = formReq[i];
        formRemoveError(input)

        if (input.classList.contains('_email')) {
            if (emailTest(input)) {
                formAddError(input);
                error++;
            }
        } else {
            if (input.value === '') {
                formAddError(input);
                error++;
            }
        }
    }
}

function formAddError(input) {
    input.classList.add('_error')
}

function formRemoveError(input) {
    input.classList.remove('_error')
}
function emailTest(input) {
    return !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(input.value);

}




const slides = document.querySelectorAll('.swiper-slide');

const rightBtn = document.getElementById('menu__right-arrow');

rightBtn.addEventListener('click', )