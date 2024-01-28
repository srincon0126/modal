'use strict';
const showModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const overLay = document.querySelector('.overlay');

const exitModal = function () {
    modal.classList.add('hidden');
    overLay.classList.add('hidden');
}
const openModal = function () {
    modal.classList.remove('hidden');
    overLay.classList.remove('hidden');
}

for (let i = 0; i < showModal.length; i++) {
    showModal[i].addEventListener('click', openModal);
    closeModal.addEventListener('click', exitModal);
    overLay.addEventListener('click', exitModal);

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            exitModal();
        }
    })


}