
// action like and dislike

 const likes = document.querySelectorAll('.home-product-item__like');
 for(var i=0;i<=likes.length;i++)
 {
  likeElement=likes[i];
  likeElement.addEventListener('click', function () {
    if (this.classList.contains('home-product-item__like--liked')) {
      this.classList.remove('home-product-item__like--liked');
    } else {
      this.classList.add('home-product-item__like--liked');
    }
  });
  
 }
 
// Ẩn hiện form login/Resgiter

const modal = document.querySelector('.js-modal');

const modalLogin = document.querySelector('.js-btn-login');
const modalBody = document.querySelector('.js-modal-body');


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





