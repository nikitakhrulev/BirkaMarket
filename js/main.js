const dropdownItem = document.querySelector('.dropdown-item');
const dropdowArrow = document.querySelector('.production-arrow__img');
dropdownItem.addEventListener('mouseenter', function() {
  dropdowArrow.src = './../img/icons/small-chevron-up.svg';
})
dropdownItem.addEventListener('mouseleave', function() {
  dropdowArrow.src = './../img/icons/small-chevron-down.svg';
})


