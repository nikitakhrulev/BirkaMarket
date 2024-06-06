const formS = document.getElementById('form1');

let validation = new JustValidate(formS);
let selector = document.querySelector('#calculate-phone-input');
let im = new Inputmask("+7(999)999-99-99");
im.mask(selector);

validation.addField('#calculate-quantity', [
    {
        rule: 'required',
        errorMessage: 'Укажите количество'
    },
])
.addField('#calculate-phone-input', [
    {
        rule: 'required',
        errorMessage: 'Укажите ваш телефон'
    },
])
.addField('#validate-checkbox', [
    {
        rule: 'required',
        errorMessage: 'Здесь необходимо ваше согласие'
    },
]).onSuccess(function () {
    formS.submit();
});
