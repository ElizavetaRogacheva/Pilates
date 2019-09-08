var menuBtn = document.querySelector('.main-nav__btn');
var menuBlock = document.querySelector('.main-nav');
var menuClose = document.querySelector('.main-nav__close-btn');

menuBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    menuBlock.classList.remove('hidden');
})

menuClose.addEventListener('click', function(evt) {
    evt.preventDefault();
    menuBlock.classList.add('hidden');
})