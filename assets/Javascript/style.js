// Ẩn hiện form login/Resgiter

const modal = document.querySelector('.js-modal');
console.log(modal)
const modalLogin = document.querySelector('.js-btn-login');
const modalBody = document.querySelector('.js-modal-body');
console.log(modalLogin)

function showFormLogin() {
    modal.classList.add('open');
}
function hideFormLogin() {
    modal.classList.remove('open')
}

modalLogin.addEventListener('click', showFormLogin);
modal.addEventListener('click', hideFormLogin);
modalBody.addEventListener('click', function (event) {
    event.stopPropagation();
});





